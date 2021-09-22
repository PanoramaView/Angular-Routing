import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service'

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // localhost:4200/users
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, //urlpath with /{slug}
    ] },
    //nesting. note: AuthGuard e AuthService needs to be added to the providers in app.module
    { path: 'servers', 
    //canActivate: [AuthGuard], // all the servers and its childs
    canActivateChild: [AuthGuard], //protects the childs only
    component: ServersComponent, 
    children: [ 
      { path: ':id', component: ServerComponent }, // load a single server
      { 
          path: ':id/edit', 
          component: EditServerComponent, 
          canDeactivate: [CanDeactivateGuard] //Angular will run this guard when we try to leave this path here 
        },
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