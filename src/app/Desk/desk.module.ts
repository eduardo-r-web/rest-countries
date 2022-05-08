import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskRoutingModule } from './desk-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DeskComponent } from './desk.component';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [
    DeskComponent
  ],
  imports: [
    CommonModule,
    DeskRoutingModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class DeskModule { }
