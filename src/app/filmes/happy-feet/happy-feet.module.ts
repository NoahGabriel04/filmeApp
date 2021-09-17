import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappyFeetPageRoutingModule } from './happy-feet-routing.module';

import { HappyFeetPage } from './happy-feet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HappyFeetPageRoutingModule
  ],
  declarations: [HappyFeetPage]
})
export class HappyFeetPageModule {}
