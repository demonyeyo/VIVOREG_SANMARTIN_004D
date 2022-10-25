import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {

  constructor(private navController: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tipo = localStorage.getItem('ingresado');
    console.log('profesor')
    if(tipo == 'profesor') {
      return true;
    } else {
      if(tipo == 'alumno') {
        return true
      }
      this.navController.navigateRoot('/loginprofesor');
      return false;
    }
  }
  
}
