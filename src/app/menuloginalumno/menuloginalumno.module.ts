import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuloginalumnoPageRoutingModule } from './menuloginalumno-routing.module';

import { MenuloginalumnoPage } from './menuloginalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuloginalumnoPageRoutingModule
  ],
  declarations: [MenuloginalumnoPage]
})
export class MenuloginalumnoPageModule {}
