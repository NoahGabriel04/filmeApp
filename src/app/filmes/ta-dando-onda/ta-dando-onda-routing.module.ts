import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaDandoOndaPage } from './ta-dando-onda.page';

const routes: Routes = [
  {
    path: '',
    component: TaDandoOndaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaDandoOndaPageRoutingModule {}
