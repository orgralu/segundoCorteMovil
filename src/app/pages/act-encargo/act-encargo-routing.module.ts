import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActEncargoPage } from './act-encargo.page';

const routes: Routes = [
  {
    path: '',
    component: ActEncargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActEncargoPageRoutingModule {}
