import { Component, OnInit } from '@angular/core';
import { Vendedora } from './../../../../models/vendedora';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VendedoraService } from './../../../../services/vendedora.service';

@Component({
  selector: 'app-vendedora-delete',
  templateUrl: './vendedora-delete.component.html',
  styleUrls: ['./vendedora-delete.component.css']
})
export class VendedoraDeleteComponent implements OnInit {

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

  findById(): void{
    this.service.findById(this.id_tec).subscribe(resposta=> {
      this.vendedora = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['vendedoras']);
  }

  delete():void{
    this.service.delete(this.id_tec).subscribe(resposta =>{
      this.router.navigate(['vendedoras']);
      this.service.message('Vendedor(a) deletado com sucesso!')
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
