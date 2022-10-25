import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  // Variable privada, porque solo se usa para asignar el valor que viene dado de AppComponent.loged
  private loged: string;


  // Es una variable publica, cosa que la pueda leer el HTMl
  public isAlumno: boolean;

  constructor(private menuController: MenuController) { }

  ngOnInit() {
    this.loged = localStorage.getItem('ingresado'); // AppComponent.loged viene de app.component.ts
    if(this.loged === 'profesor') { // Si profesor, entonces isAlumno = false
      this.isAlumno = false;
    } else if(this.loged === 'alumno') { // Si alumno, entonces isAlumno = true
      this.isAlumno = true;
    }
    // Este fragmento de codigo solo detecta si es un profesor o un alumno y lo convierte a True o False
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
