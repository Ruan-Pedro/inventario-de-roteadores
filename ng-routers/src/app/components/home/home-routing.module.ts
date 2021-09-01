import { SearchResultComponent as SearchResultClientComponent } from './search-clients/search-result/search-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdformComponent as UpdformClientComponent } from './management-clients/update/updform/updform.component';
import { UpdateComponent as UpdateClientComponent } from './management-clients/update/update.component';
import { DeleteComponent as DeleteClientComponent } from './management-clients/delete/delete.component';
import { InsertComponent as InsertCLientComponent } from './management-clients/insert/insert.component';
import { HomeComponent } from './home.component';
import { DatabaseComponent } from './database/database.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './management/delete/delete.component';
import { InsertComponent } from './management/insert/insert.component';
import { UpdateComponent } from './management/update/update.component';
import { UpdformComponent } from './management/update/updform/updform.component';
import { ManagementComponent } from './management/management.component';
import { DatabaseClientsComponent } from './database-clients/database-clients.component';
import { ManagementClientsComponent } from './management-clients/management-clients.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { 
    path: "management",
    component: ManagementComponent,
    children: [
      {
        path:"insert",
        component:InsertComponent
      },
      {
        path:"update",
        component: UpdateComponent,
      },
      {
        path:"update/:id",
        component: UpdformComponent,
      },
      {
        path:"delete",
        component: DeleteComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "database",
    component: DatabaseComponent
  },
  {
    path:"search",
    component: SearchComponent
  },
  {
    path:"search/n/:nome",
    component: SearchResultComponent
  }
  ,
  {
    path:"clients/database",
    component:DatabaseClientsComponent
  },
  {
    path:"clients/management",
    component:ManagementClientsComponent,
    children:[
      {
        path:'insert',
        component: InsertCLientComponent
      },
      
        {
          path:'delete',
          component: DeleteClientComponent
        } 
      ,
      {
        path:'update',
        component: UpdateClientComponent,
      },
      {
        path:'update/:id',
        component: UpdformClientComponent,
      }
    ]
  },
  {
    path:"clients/search",
    component:SearchClientsComponent
  },
  {
    path:"clients/search/nome",
    component:SearchResultClientComponent
  }
  // {
  //   path:"management/update/:id",
  //   component: UpdateFormComponent
  // },
  // {
  //   path:"select-router",
  //   component:RouterOneComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
