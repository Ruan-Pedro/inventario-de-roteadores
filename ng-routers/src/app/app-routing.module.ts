import { DeleteComponent } from './components/views/management/delete/delete.component';
import { UpdateComponent } from './components/views/management/update/update.component';
import { InsertComponent } from './components/views/management/insert/insert.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateFormComponent } from './components/views/management/update/update-form/update-form.component';
import { LoginComponent } from './components/views/login/login.component';
import { RouterOneComponent } from './components/views/router-one/router-one.component';

const routes: Routes = [
//   
//   {
//     path:"insert",
//     component:InsertComponent
//   },
//   {
//     path:"update",
//     component: UpdateComponent
//   },
//   {
//     path:"delete",
//     component: DeleteComponent
//   }

//   {
//     path:"management/update/:id",
//     component: UpdateFormComponent
//   },
  {
    path:"login",
    component:LoginComponent
  },
  // {
  //     path:"select-router",
  //     component:RouterOneComponent
  //   },

  { path: 'home', loadChildren: () => import('./components/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'clients', loadChildren: () => import('./components/views/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'routers', loadChildren: () => import('./components/views/routers/routers.module').then(m => m.RoutersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
