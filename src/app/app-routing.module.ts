import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';
import { ProfesorGuard } from './guards/profesor.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  {
    path: 'seleccion',
    loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'seleccion',
    pathMatch: 'full'
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule),
    canActivate: [ProfesorGuard, AlumnoGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
    canActivate: [ProfesorGuard, AlumnoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'loginprofesor',
    loadChildren: () => import('./loginprofesor/loginprofesor.module').then( m => m.LoginprofesorPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menulogin',
    loadChildren: () => import('./menulogin/menulogin.module').then( m => m.MenuloginPageModule),
    canActivate: [ProfesorGuard]
  },
  {
    path: 'menuloginalumno',
    loadChildren: () => import('./menuloginalumno/menuloginalumno.module').then( m => m.MenuloginalumnoPageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [ProfesorGuard, AlumnoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
