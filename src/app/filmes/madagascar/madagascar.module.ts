import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadagascarPageRoutingModule } from './madagascar-routing.module';

import { MadagascarPage } from './madagascar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadagascarPageRoutingModule
  ],
  declarations: [MadagascarPage]
})
export class MadagascarPageModule {}
