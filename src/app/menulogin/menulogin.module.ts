import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuloginPageRoutingModule } from './menulogin-routing.module';

import { MenuloginPage } from './menulogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuloginPageRoutingModule
  ],
  declarations: [MenuloginPage]
})
export class MenuloginPageModule {}
