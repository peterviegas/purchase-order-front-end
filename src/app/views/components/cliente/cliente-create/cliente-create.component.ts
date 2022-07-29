import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/clientes';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(11)]);
  
  constructor(
    private router : Router,
    private service : ClienteService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['clientes']);
  }

  create():void{
    this.service.create(this.cliente).subscribe((resposta)=>{
      this.router.navigate(['clientes']);
      this.service.message('Vendedor(a) criada com sucesso!');
    },err =>{
      console.log(err);
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error);
      }else{
        this.service.message(err.error.errors[0].message);
      }
    });
  }

  errorValidName(){
    if(this.nome.invalid){
      return 'O nome de ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  errorValidCPF(){
    if(this.cpf.invalid){
      return 'CPF de ter 11 e 15 caracteres!';
    }
    return false;
  }

  errorValidTelefone(){
    if(this.telefone.invalid){
      return 'O telefone de ter entre 11 e 18 caracteres!';
    }
    return false;
  }
}
