import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendedoraService } from './../../../../services/vendedora.service';
import { Vendedora } from './../../../../models/vendedora';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendedora-create',
  templateUrl: './vendedora-create.component.html',
  styleUrls: ['./vendedora-create.component.css']
})
export class VendedoraCreateComponent implements OnInit {

  vendedora: Vendedora = {
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
    private service : VendedoraService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['vendedoras']);
  }

  create():void{
    this.service.create(this.vendedora).subscribe((resposta)=>{
      this.router.navigate(['vendedoras']);
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
