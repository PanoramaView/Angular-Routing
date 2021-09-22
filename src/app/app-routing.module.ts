import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // localhost:4200/users
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, //urlpath with /{slug}
    ] },
    { path: 'servers', component: ServersComponent, children: [ //nesting
      { path: ':id', component: ServerComponent }, // load a single server
      { path: ':id/edit', component: EditServerComponent },
    ] },
    { path: 'not-found', component: PageNotFoundComponent }, //wildcard url
    { path: '**', redirectTo: '/not-found'} // catch all not existing paths to redirect to not-found
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule] // says what is exportable in this module to other modules
})

export class AppRoutingModule{

}