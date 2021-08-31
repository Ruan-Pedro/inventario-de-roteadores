import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutersComponent } from './routers.component';

const routes: Routes = [{ path: '', component: RoutersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
