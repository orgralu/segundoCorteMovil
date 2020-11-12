import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEncargoPageRoutingModule } from './add-encargo-routing.module';

import { AddEncargoPage } from './add-encargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEncargoPageRoutingModule
  ],
  declarations: [AddEncargoPage]
})
export class AddEncargoPageModule {}
