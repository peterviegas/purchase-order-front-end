import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vendedora } from './../../../../models/vendedora';
import { VendedoraService } from './../../../../services/vendedora.service';

@Component({
  selector: 'app-vendedora-read',
  templateUrl: './vendedora-read.component.html',
  styleUrls: ['./vendedora-read.component.css']
})
export class VendedoraReadComponent implements AfterViewInit {

  vendedoras: Vendedora[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'action'];
  dataSource = new MatTableDataSource<Vendedora>(this.vendedoras);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : VendedoraService,
    private router : Router){}

  ngAfterViewInit() {
    this.findall();
  }

  findall():void{
    this.service.findAll().subscribe((resposta)=>{
      this.vendedoras = resposta;
      this.dataSource = new MatTableDataSource<Vendedora>(this.vendedoras);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['vendedoras/create']);
  }
}


