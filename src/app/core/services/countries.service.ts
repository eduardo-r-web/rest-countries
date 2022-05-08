import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { CountryDetail, SummaryCountry } from '../model/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  getCountriesAll(): Observable<SummaryCountry[]> {
    return this.httpClient.get<SummaryCountry[]>(`${environment.URL_API}all`)
      .pipe(
        map((countries) => {
          let newCountries: SummaryCountry[] = [];
          countries.forEach(country => {
            newCountries.push({
              name: country.name,
              capital: country.capital,
              region: country.region,
              population: country.population,
              flag: country.flag
            });
          });
          return newCountries;
        })
      );
  }

  getCountry(name: string): Observable<CountryDetail> {
    return this.httpClient.get<CountryDetail[]>(`${environment.URL_API}name/${name}?fullText=true`)
      .pipe(
        map((country: CountryDetail[]) => {
          let newCountry;
          newCountry = {
              name: country[0].name,
              nativeName: country[0].nativeName,
              capital: country[0].capital,
              region: country[0].region,
              population: country[0].population,
              flag: country[0].flag,
              languages: country[0].languages,
              subregion: country[0].subregion,
              topLevelDomain: country[0].topLevelDomain,
              currencies: country[0].currencies,
              borders:    country[0].borders
            }
          return newCountry;
        })
      );
  }

  getFilterNameCountry(name: string): Observable<SummaryCountry[]> {
    return this.httpClient.get<SummaryCountry[]>(`${environment.URL_API}name/${name}`)
      .pipe(
        map((countries) => {
          let newCountries: SummaryCountry[] = [];
          countries.forEach(country => {
            newCountries.push({
              name: country.name,
              capital: country.capital,
              region: country.region,
              population: country.population,
              flag: country.flag
            });
          });
          return newCountries;
        })
      );
  }

  getCountriesByContinent( continent: string ){
    return this.httpClient.get<SummaryCountry[]>(`${environment.URL_API}continent/${continent.toLowerCase()}`)
      .pipe(
        map((countries) => {
          let newCountries: SummaryCountry[] = [];
          countries.forEach(country => {
            newCountries.push({
              name: country.name,
              capital: country.capital,
              region: country.region,
              population: country.population,
              flag: country.flag
            });
          });
          return newCountries;
        })
      );
  }

}
