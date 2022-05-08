import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { SummaryCountry } from 'src/app/core/model/countries.interface';
import { CountriesService } from 'src/app/core/services/countries.service';

@Component({
  selector: 'app-countries-filter',
  templateUrl: './countries-filter.component.html',
  styleUrls: ['./countries-filter.component.sass']
})
export class CountriesFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<Observable<SummaryCountry[]>>();
  continent = new FormControl(null);
  continents: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  constructor( private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  emitFilter( search?: string ){
    if( search ){
      if( search.trim() != '' ){
        this.countriesService.getFilterNameCountry(search)
        .pipe(debounceTime(400));
        this.filter.emit(this.countriesService.getFilterNameCountry(search));
      }else if(search.trim() == '' && !this.continent.value){
        this.filter.emit(this.countriesService.getCountriesAll());
      }else if(search.trim() == '' && this.continent.value){
        this.filter.emit(this.countriesService.getCountriesByContinent(this.continent.value));
      }
    }else{
      this.filter.emit(this.countriesService.getCountriesByContinent(this.continent.value));
    }
  }

}
