import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcctionSheetPage } from './acction-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AcctionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcctionSheetPageRoutingModule {}
