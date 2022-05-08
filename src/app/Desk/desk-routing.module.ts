import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries'
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskRoutingModule { }
