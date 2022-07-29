import { Component, OnInit } from '@angular/core';
import { OC } from './../../../../models/OC';
import { Vendedora } from './../../../../models/vendedora';
import { Cliente } from './../../../../models/clientes';
import { VendedoraService } from './../../../../services/vendedora.service';
import { ClienteService } from './../../../../services/cliente.service';
import { OsService } from './../../../../services/oc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oc-update',
  templateUrl: './oc-update.component.html',
  styleUrls: ['./oc-update.component.css']
})
export class OcUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.oc.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listarVendedoras();
    this.listarClientes();
  }

  findById():void{
    this.service.findById(this.oc.id).subscribe(resposta=> {
      this.oc = resposta;
      this.converteDados();
    })
  }
  update():void{
    this.service.update(this.oc).subscribe(resposta=> {
      this.service.message("Ordem de Compra atualizada com sucesso");
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

  converteDados():void{
    if(this.oc.status == "ABERTO"){
      this.oc.status = 0;
    }else if(this.oc.status == "ANDAMENTO"){
      this.oc.status = 1;
    }else{
      this.oc.status = 2;
    }

    if(this.oc.prioridade == "BAIXA"){
      this.oc.prioridade = 0;
    }else if(this.oc.prioridade == "MEDIA"){
      this.oc.prioridade = 1;
    }else{
      this.oc.prioridade = 2;
    }

  }
}
