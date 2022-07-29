import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendedoraService } from './../../../../services/vendedora.service';
import { FormControl, Validators } from '@angular/forms';
import { Vendedora } from './../../../../models/vendedora';

@Component({
  selector: 'app-vendedora-update',
  templateUrl: './vendedora-update.component.html',
  styleUrls: ['./vendedora-update.component.css']
})
export class VendedoraUpdateComponent implements OnInit {

  id_tec = '';

  vendedora: Vendedora = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(11)]);

  constructor(private router : Router,
    private service : VendedoraService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void {
    this.service.update(this.vendedora).subscribe((resposta)=>{
      this.router.navigate(['vendedoras']);
      this.service.message('Vendedor(a) atualizado com sucesso!')
    },err =>{
      console.log(err);
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error);
      }else{
        this.service.message(err.error.errors[0].message);
      }
    })
  }

  findById(): void{
    this.service.findById(this.id_tec).subscribe(resposta=> {
      this.vendedora = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['vendedoras']);
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
