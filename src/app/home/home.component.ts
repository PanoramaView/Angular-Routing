import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    //before the going to the link [ calculations here ]
    this.router.navigate(['/servers', id, 'edit'], 
    {queryParams: {allowEdit: '1'}, fragment: 'loading'}); //we are able to trigger the link in our code.
  }
  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }
}
