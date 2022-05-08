import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
