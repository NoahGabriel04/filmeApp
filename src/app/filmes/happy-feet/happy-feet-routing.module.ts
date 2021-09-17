import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HappyFeetPage } from './happy-feet.page';

const routes: Routes = [
  {
    path: '',
    component: HappyFeetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappyFeetPageRoutingModule {}
