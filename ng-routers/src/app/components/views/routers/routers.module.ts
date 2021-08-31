import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutersRoutingModule } from './routers-routing.module';
import { RoutersComponent } from './routers.component';


@NgModule({
  declarations: [RoutersComponent],
  imports: [
    CommonModule,
    RoutersRoutingModule
  ]
})
export class RoutersModule { }
