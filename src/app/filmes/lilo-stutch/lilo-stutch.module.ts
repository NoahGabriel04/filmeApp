import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiloStutchPageRoutingModule } from './lilo-stutch-routing.module';

import { LiloStutchPage } from './lilo-stutch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiloStutchPageRoutingModule
  ],
  declarations: [LiloStutchPage]
})
export class LiloStutchPageModule {}
