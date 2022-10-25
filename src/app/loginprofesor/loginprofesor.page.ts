import { Component, OnInit } from '@angular/core';
import { RegistroserviceService } from '../services/registroservice.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginprofesor',
  templateUrl: './loginprofesor.page.html',
  styleUrls: ['./loginprofesor.page.scss'],
})
export class LoginprofesorPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private registroService: RegistroserviceService,
    private alertController: AlertController,
    private router: Router,
  ) { }
  
  ngOnInit() {
  }
  profesor = {
    email: '',
    password: ''
  };

  onSubmit() {
    let loged = false;
    let nombre = '';
    this.registroService.getUsuarios()
    .then((data: any) => {
      for(let i of data) {
        if(i.correo === this.profesor.email && i.password === this.profesor.password) {
          if(i.profesor == 'true') {
            loged = true;
            nombre = i.nombre;
          }
        }
      }
      if(loged) {
        console.log(nombre);
        localStorage.setItem('ingresado', 'profesor');
        this.registroService.setNombre(nombre);
        this.router.navigate(['/menulogin']);
      } else {
        this.alertMsg();
      }
    });
  };

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
