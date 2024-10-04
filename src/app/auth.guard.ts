import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RedalService } from './service/redal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private redalservice: RedalService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.redalservice.getCurrentUser();
    if (currentUser) {
      // L'utilisateur est authentifié
      return true;
    }

    // L'utilisateur n'est pas authentifié, redirigez vers la page de connexion
    this.router.navigate(['']);
    return false;
  }
}
