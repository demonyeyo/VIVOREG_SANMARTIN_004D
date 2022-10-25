import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuloginPage } from './menulogin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuloginPageRoutingModule {}
