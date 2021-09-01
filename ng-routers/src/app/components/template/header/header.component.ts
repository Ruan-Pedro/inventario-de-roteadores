import { Router } from '@angular/router';
import { UserService } from './../../../services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService:UserService,
    private router:Router
  ) { }

    user$ = this.userService.returnUser()

  logout(){
    this.userService.logout()
    this.router.navigate([''])
  }

}
