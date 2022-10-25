import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
  constructor(private navController: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tipo = localStorage.getItem('ingresado');
    if(tipo == 'false' || (tipo == null || tipo == undefined)) {
      return true;
    } else {
      if(tipo == 'profesor') {
        this.navController.navigateRoot('/menulogin');
      } else if (tipo == 'alumno') {
        this.navController.navigateRoot('/menuloginalumno');
      } else {
        console.log('error');
      }
      return false;
    } 
  
  }
  
}
