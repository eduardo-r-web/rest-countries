import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryCountry } from 'src/app/core/model/countries.interface';
import { CountriesService } from 'src/app/core/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass']
})
export class CountriesComponent implements OnInit {

  countries: Observable<SummaryCountry[]> | undefined;
  filter: string | undefined;

  constructor( private countriesService: CountriesService) { }

  ngOnInit(): void {    
    this.countries = this.countriesService.getCountriesAll();
  }

  emitFilter( filter: Observable<SummaryCountry[]> ){
    this.countries = filter;
  }

}
