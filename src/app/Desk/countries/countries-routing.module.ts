import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: 'country/:name',
    component: CountryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
