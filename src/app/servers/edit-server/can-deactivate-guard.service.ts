/* Guard to connect component to CanDeactivate Guard */

import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate, //needs to be a component wihch has this interface here implemented
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot // > here do you want to go
        ): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate(); // connection between component and the Guard. To see if we're allowed to leave the current path
        }
    
}