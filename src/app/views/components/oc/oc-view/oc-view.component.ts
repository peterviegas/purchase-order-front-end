import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OC } from './../../../../models/OC';
import { OsService } from './../../../../services/oc.service';

@Component({
  selector: 'app-oc-view',
  templateUrl: './oc-view.component.html',
  styleUrls: ['./oc-view.component.css']
})
export class OcViewComponent implements OnInit {

  oc: OC={
    vendedora: '',
    cliente: '',
    observacoes: '',
    prioridade: '',
    status: ''
  }

  constructor(
    private route: ActivatedRoute,
    private service: OsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.oc.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById():void{
    this.service.findById(this.oc.id).subscribe(resposta =>{
      this.oc = resposta;
      this.findById();
    })
  }

  return():void{
    this.router.navigate(['oc']);
  }
}
