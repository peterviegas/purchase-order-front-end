import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
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
import { MatMenuModule} from '@angular/material/menu';
import { OcClosedComponent } from './views/components/oc/oc-closed/oc-closed.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VendedoraReadComponent,
    VendedoraCreateComponent,
    VendedoraUpdateComponent,
    VendedoraDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OcReadComponent,
    OcCreateComponent,
    OcUpdateComponent,
    OcViewComponent,
    OcClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
