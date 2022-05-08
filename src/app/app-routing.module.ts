import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { DeskComponent } from './Desk/desk.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'v2',
    pathMatch: 'full'
  },
  {
    path: 'v2',
    component: DeskComponent,
    loadChildren: () => import('./Desk/desk.module').then( m => m.DeskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
