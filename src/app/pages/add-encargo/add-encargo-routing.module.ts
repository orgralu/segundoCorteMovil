import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEncargoPage } from './add-encargo.page';

const routes: Routes = [
  {
    path: '',
    component: AddEncargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEncargoPageRoutingModule {}
