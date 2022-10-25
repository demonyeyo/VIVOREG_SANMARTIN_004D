import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { RegistroserviceService, Usuario } from '../services/registroservice.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  nuevoRegistro: Usuario = <Usuario>{};

  constructor(
    public fb: FormBuilder,
    private toastController: ToastController,
    private registroService: RegistroserviceService,
    private alertController: AlertController,
    ) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'fecha': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.email),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
      'tipo': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async registrarse(){
    var form = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header : 'Error..', 
        message: 'Debe ingresar todos los datos', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else{
      this.nuevoRegistro.nombre = form.nombre;
      this.nuevoRegistro.correo = form.correo;
      this.nuevoRegistro.fecha = form.fecha; 
      this.nuevoRegistro.password = form.password;
      this.nuevoRegistro.profesor = form.tipo;
      this.registroService.addUsuario(this.nuevoRegistro).then(dato =>{
        this.nuevoRegistro = <Usuario>{};
        this.showToast('Usuario Creado con éxito!');
      })
    }
    this.formularioRegistro.reset();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

}
