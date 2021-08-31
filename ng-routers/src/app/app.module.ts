import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/template/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ManagementComponent } from './components/views/management/management.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { DatabaseComponent } from './components/views/database/database.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
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

// import {MatSidenavModule } from '@angular/material/sidenav'
// import {MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ManagementComponent,
    DashboardComponent,
    DatabaseComponent,
    SidenavComponent,
    ForDirective,
    DialogPopupdelComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    UpdateFormComponent,
    LoginComponent,
    RouterOneComponent,
    
  ],
  entryComponents: [DialogPopupdelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
