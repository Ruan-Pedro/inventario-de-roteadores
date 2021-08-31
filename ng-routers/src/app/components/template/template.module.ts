import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [SidenavComponent,HeaderComponent,FooterComponent],
  imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
  ],
  exports: [SidenavComponent,HeaderComponent,FooterComponent]
})
export class TemplateModule { }
