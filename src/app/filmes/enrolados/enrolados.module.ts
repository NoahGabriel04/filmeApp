import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnroladosPageRoutingModule } from './enrolados-routing.module';

import { EnroladosPage } from './enrolados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnroladosPageRoutingModule
  ],
  declarations: [EnroladosPage]
})
export class EnroladosPageModule {}
