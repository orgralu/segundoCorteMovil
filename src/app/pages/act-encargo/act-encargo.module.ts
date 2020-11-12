import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActEncargoPageRoutingModule } from './act-encargo-routing.module';

import { ActEncargoPage } from './act-encargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActEncargoPageRoutingModule
  ],
  declarations: [ActEncargoPage]
})
export class ActEncargoPageModule {}
