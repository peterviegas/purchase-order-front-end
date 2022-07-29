import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OC } from './../../../../models/OC';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OsService } from './../../../../services/oc.service';
import { Router } from '@angular/router';
import { VendedoraService } from './../../../../services/vendedora.service';
import { ClienteService } from './../../../../services/cliente.service';

@Component({
  selector: 'app-oc-closed',
  templateUrl: './oc-closed.component.html',
  styleUrls: ['./oc-closed.component.css']
})
export class OcClosedComponent implements AfterViewInit {

  lista: OC[] = [];

  displayedColumns: string[] = ['vendedora', 'cliente','abertura', 'fechamento', 'prioridade', 'status', 'action'];
  dataSource = new MatTableDataSource<OC>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : OsService,
    private router : Router,
    private vendedoraService: VendedoraService,
    private clienteService: ClienteService){}

  ngAfterViewInit() {
    this.findall();
  }

  findall():void{
    this.service.findAll().subscribe((resposta)=>{
      resposta.forEach(x =>{
        if(x.status == "ENCERRADO"){
          this.lista.push(x);
        }
      })
      this.listarVendedora();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OC>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }

  listarVendedora():void{
    this.lista.forEach(x => {
      this.vendedoraService.findById(x.vendedora).subscribe(resposta => {
        x.vendedora = resposta.nome
      })
    })
  }

  listarCliente():void{
    this.lista.forEach(x => {
      this.clienteService.findById(x.cliente).subscribe(resposta => {
        x.cliente = resposta.nome
      })
    })
  }

  prioridade(x : any){
    if(x == 'BAIXA'){
      return 'baixa';
    }else if (x=='MEDIA'){
      return 'media';
    }else{
      return 'alta';
    }
  }

}
