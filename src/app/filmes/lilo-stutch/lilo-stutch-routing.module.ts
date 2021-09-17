import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiloStutchPage } from './lilo-stutch.page';

const routes: Routes = [
  {
    path: '',
    component: LiloStutchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiloStutchPageRoutingModule {}
