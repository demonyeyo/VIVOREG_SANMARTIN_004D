import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from '../services/registroservice.service';

@Component({
  selector: 'app-menuloginalumno',
  templateUrl: './menuloginalumno.page.html',
  styleUrls: ['./menuloginalumno.page.scss'],
})
export class MenuloginalumnoPage implements OnInit {

  public nombre = this.registroService.getNombre();

  constructor(
    private menuController:MenuController,
    private registroService: RegistroserviceService,
    ) { }

  ngOnInit() {
  }
  mostrarMenu(){

    this.menuController.open('first');

  }
}
