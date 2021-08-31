import { DeleteComponent } from './components/views/management/delete/delete.component';
import { UpdateComponent } from './components/views/management/update/update.component';
import { InsertComponent } from './components/views/management/insert/insert.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './components/views/management/management.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { DatabaseComponent } from './components/views/database/database.component';
import { HomeComponent } from './components/template/home/home.component';
import { UpdateFormComponent } from './components/views/management/update/update-form/update-form.component';
import { LoginComponent } from './components/views/login/login.component';
import { RouterOneComponent } from './components/views/router-one/router-one.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
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
    component: UpdateComponent
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
    path:"management/update/:id",
    component: UpdateFormComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
      path:"select-router",
      component:RouterOneComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
