import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public static loged: string;

  constructor(private router: Router, private storage: Storage) {
    
    this.storage.create();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(event.url === '/menuloginalumno') { // Si la URL es MenuLoginAlumno entonces "loged=alumno"
          AppComponent.loged = 'alumno';
        } else if (event.url === '/menulogin') { // Si la URL es MenuLogin entonces "loged=profesor"
          AppComponent.loged = 'profesor';
        }                                       // Si viene desde otra URL, no sabe quien esta logeado
      }
    });

  }
  // ----------
  // Entonces en app.component (aqui) se detecta si esta logeado el alumno o el profesor en base al URL
  // Luego esta variable se exporta a qr.page.ts
  // en qr.page.ts se cambia a valor booleano
  // en el html de qr.page se usa ng-template para cambiar en funcion si es alumno o profesor
  // -----------
  componentes: Componente[] = [
    {
      icon: 'person-outline',
      name: 'Inicio',
      redirecTo: '/seleccion',
    },
    {
      icon: 'qr-code-outline',
      name: 'QR',
      redirecTo: '/qr',
    },
    {
      icon: 'planet-outline',
      name: 'Sobre Nosotros',
      redirecTo: '/about',
    },
    {
      icon: 'calendar-outline',
      name: 'Feriados',
      redirecTo: '/feriados',
    },
  ]

  public logout() {
    localStorage.setItem('ingresado', 'false');
    this.router.navigate(['/']);
  }

}
