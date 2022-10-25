import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuloginalumnoPage } from './menuloginalumno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuloginalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuloginalumnoPageRoutingModule {}
