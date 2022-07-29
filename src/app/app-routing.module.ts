import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { VendedoraReadComponent } from './views/components/vendedora/vendedora-read/vendedora-read.component';
import { VendedoraCreateComponent } from './views/components/vendedora/vendedora-create/vendedora-create.component';
import { VendedoraUpdateComponent } from './views/components/vendedora/vendedora-update/vendedora-update.component';
import { VendedoraDeleteComponent } from './views/components/vendedora/vendedora-delete/vendedora-delete.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OcReadComponent } from './views/components/oc/oc-read/oc-read.component';
import { OcCreateComponent } from './views/components/oc/oc-create/oc-create.component';
import { OcUpdateComponent } from './views/components/oc/oc-update/oc-update.component';
import { OcViewComponent } from './views/components/oc/oc-view/oc-view.component';
import { OcClosedComponent } from './views/components/oc/oc-closed/oc-closed.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vendedoras',
    component: VendedoraReadComponent
  },
  {
    path: 'vendedoras/create',
    component: VendedoraCreateComponent
  },
  {
    path: 'vendedoras/update/:id',
    component: VendedoraUpdateComponent
  },
  {
    path: 'vendedoras/delete/:id',
    component: VendedoraDeleteComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'oc',
    component: OcReadComponent
  },
  {
    path: 'oc/closed',
    component: OcClosedComponent
  },
  {
    path: 'oc/create',
    component: OcCreateComponent
  },
  {
    path: 'oc/update/:id',
    component: OcUpdateComponent
  },
  {
    path: 'oc/view/:id',
    component: OcViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
