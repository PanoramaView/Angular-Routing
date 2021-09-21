import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(){
    //before the going to the link [ calculations here ]
    this.router.navigate(['/servers']); //we are able to trigger the link in our code.
  }
}
