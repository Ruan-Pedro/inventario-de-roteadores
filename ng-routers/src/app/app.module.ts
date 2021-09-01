import { HomeModule } from './components/home/home.module';
import { TemplateModule } from './components/template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { ForDirective } from './directives/for.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DialogPopupdelComponent } from './components/dialog-popupdel/dialog-popupdel.component';
import { InsertComponent } from './components/views/management/insert/insert.component';
import { DeleteComponent } from './components/views/management/delete/delete.component';
import { UpdateComponent } from './components/views/management/update/update.component';
import { UpdateFormComponent } from './components/views/management/update/update-form/update-form.component';
import { LoginComponent } from './components/views/login/login.component';
import { RouterOneComponent } from './components/views/router-one/router-one.component';


@NgModule({
  declarations: [
    AppComponent,
    ForDirective,
    DialogPopupdelComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    UpdateFormComponent,
    LoginComponent,
    RouterOneComponent   
  ],
  entryComponents: [DialogPopupdelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    HomeModule,
    TemplateModule
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
