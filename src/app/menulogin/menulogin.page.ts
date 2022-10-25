import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menulogin',
  templateUrl: './menulogin.page.html',
  styleUrls: ['./menulogin.page.scss'],
})
export class MenuloginPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){

    this.menuController.open('first');

  }
}
