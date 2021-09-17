import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadagascarPage } from './madagascar.page';

const routes: Routes = [
  {
    path: '',
    component: MadagascarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadagascarPageRoutingModule {}
