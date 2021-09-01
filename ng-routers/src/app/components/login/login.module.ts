import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SideComponent } from './side/side.component';
import { RegisterComponent } from './register/register.component';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [LoginComponent, SideComponent, RegisterComponent, MsgComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
