import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './../../../../models/clientes';
import { FormControl, Validators } from '@angular/forms';
import { ClienteService } from './../../../../services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id_cli = '';

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
    private service : ClienteService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  cancel():void{
    this.router.navigate(['clientes']);
  }

  findById(): void{
    this.service.findById(this.id_cli).subscribe(resposta=>{
      this.cliente = resposta;
    })
  }

  update():void{
    this.service.update(this.cliente).subscribe((resposta)=>{
      this.router.navigate(['clientes']);
      this.service.message('Cliente alterado com sucesso!');
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
