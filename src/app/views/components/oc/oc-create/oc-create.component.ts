import { Component, OnInit } from '@angular/core';
import { VendedoraService } from './../../../../services/vendedora.service';
import { Vendedora } from './../../../../models/vendedora';
import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/clientes';
import { OC } from './../../../../models/OC';
import { OsService } from './../../../../services/oc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oc-create',
  templateUrl: './oc-create.component.html',
  styleUrls: ['./oc-create.component.css']
})
export class OcCreateComponent implements OnInit {

  oc: OC = {
    vendedora: '',
    cliente: '',
    observacoes:'',
    status:'',
    prioridade:''
  }

  vendedoras: Vendedora[] = [];
  clientes: Cliente[] = [];

  constructor(
    private vendedoraService: VendedoraService,
    private clienteService : ClienteService,
    private service: OsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarVendedoras();
    this.listarClientes();
  }

  create():void{
    this.service.create(this.oc).subscribe(resposta=> {
      this.service.message("Ordem de Compra criada com sucesso");
      this.router.navigate(['oc']);
    })
  }

  cancel():void{
    this.router.navigate(['oc']);
  }

  listarVendedoras(){
    this.vendedoraService.findAll().subscribe(resposta=> {
      this.vendedoras = resposta;
    })
  }

  listarClientes(){
    this.clienteService.findAll().subscribe(resposta=> {
      this.clientes = resposta;
    })
  }
}
