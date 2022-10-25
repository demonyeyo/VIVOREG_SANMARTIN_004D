import { Component, OnInit } from '@angular/core';
import { RegistroserviceService } from '../services/registroservice.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private registroService: RegistroserviceService,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  alumno = {
    email: '',
    password: ''
  };

  onSubmit() {
    let loged = false;
    let nombre = '';
    this.registroService.getUsuarios()
    .then((data: any) => {
      for(let i of data) {
        if(i.correo === this.alumno.email && i.password === this.alumno.password) {
          if(i.profesor == 'false') {
            loged = true;
            nombre = i.nombre;
          }
        }
      }
      if(loged) {
        console.log(nombre);
        localStorage.setItem('ingresado', 'alumno');
        this.registroService.setNombre(nombre);
        this.router.navigate(['/menuloginalumno']);
      } else {
        console.log('error login');
      }
    });
  };

}
