import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaDandoOndaPageRoutingModule } from './ta-dando-onda-routing.module';

import { TaDandoOndaPage } from './ta-dando-onda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaDandoOndaPageRoutingModule
  ],
  declarations: [TaDandoOndaPage]
})
export class TaDandoOndaPageModule {}
