import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //get id from ActivatedRoute
    this.server = this.serversService.getServer(id); // use the id to get the server
    
    this.route.params //to react to any changes, subscribe to your params
      .subscribe(
        (params: Params) => { //get the params
          this.server = this.serversService.getServer(+params['id']); //get new server on the same page
        }
      );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
