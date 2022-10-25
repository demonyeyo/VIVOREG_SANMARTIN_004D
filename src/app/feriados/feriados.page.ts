import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiserviceService } from '../services/apiservice.service';

interface Dia {
  nombre: string;
  comentarios: string | null;
  fecha: string;
  irrenunciable: string;
  tipo: string;
}

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  public dias: Dia[] = [];

  constructor(
    private api: ApiserviceService,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  public consultarApi() {
    this.dias=[];
    this.api.getFeriados().then((data: any) => {
      data.forEach((dia: any) => {
        this.dias.push(<Dia>{
          nombre: dia.nombre,
          comentarios: dia.comentarios,
          fecha: dia.fecha,
          irrenunciable: dia.irrenunciable,
          tipo: dia.tipo,
        });
      });
    });
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
