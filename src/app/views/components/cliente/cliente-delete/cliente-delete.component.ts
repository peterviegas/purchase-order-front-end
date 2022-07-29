import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../../../models/clientes';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../../../services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  id_tec = '';

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(11)]);

  constructor(private router : Router,
    private service : ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_tec).subscribe(resposta=> {
      this.cliente = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['clientes']);
  }

  delete():void{
    this.service.delete(this.id_tec).subscribe(resposta =>{
      this.router.navigate(['clientes']);
      this.service.message('Cliente deletado com sucesso!')
    },err =>{
      console.log(err);
      if(err.error.error.match('possui Ordem de Compra')){
        this.service.message(err.error.error);
      }else{
        this.service.message(err.error.errors[0].message);
      }
    })
  }
}
