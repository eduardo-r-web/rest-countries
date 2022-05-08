import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesFilterComponent } from './components/countries-filter/countries-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent,
    CountryDetailsComponent,
    CountriesFilterComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
