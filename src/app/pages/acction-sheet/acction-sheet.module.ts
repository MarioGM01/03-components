import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcctionSheetPageRoutingModule } from './acction-sheet-routing.module';

import { AcctionSheetPage } from './acction-sheet.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcctionSheetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AcctionSheetPage]
})
export class AcctionSheetPageModule {}
