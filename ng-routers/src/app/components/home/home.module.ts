import { TemplateModule } from './../template/template.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DatabaseComponent } from './database/database.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { InsertComponent } from './management/insert/insert.component';
import { DeleteComponent } from './management/delete/delete.component';
import { UpdateComponent } from './management/update/update.component';
import { UpdformComponent } from './management/update/updform/updform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseClientsComponent } from './database-clients/database-clients.component';
import { ManagementClientsComponent } from './management-clients/management-clients.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';

import { InsertComponent as InsertClientComponent } from './management-clients/insert/insert.component';
import { DeleteComponent as DeleteClientComponent } from './management-clients/delete/delete.component';
import { UpdateComponent as UpdateClientComponent } from './management-clients/update/update.component';
import { UpdformComponent as UpdformClientComponent } from './management-clients/update/updform/updform.component';

@NgModule({
  declarations: [
    HomeComponent,
    DatabaseComponent,
    DashboardComponent,
    ManagementComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    UpdformComponent,
    DatabaseClientsComponent,
    ManagementClientsComponent,
    SearchClientsComponent,
    InsertClientComponent,
    UpdformClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    TemplateModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    DatabaseComponent,
    DashboardComponent,
    ManagementComponent,
  ]
})
export class HomeModule { }
