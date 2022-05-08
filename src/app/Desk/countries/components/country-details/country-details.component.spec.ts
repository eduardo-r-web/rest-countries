import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Region } from 'src/app/core/model/countries.interface';
import { CountriesService } from 'src/app/core/services/countries.service';

import { CountryDetailsComponent } from './country-details.component';

class CountriesServiceStub{
  getCountriesAll(){
    return of([]);
  }
}

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      providers: [
        { provide: CountriesService, useClase: CountriesServiceStub }
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should charge countryDetail object', () => {
    let countryDetail = component.countryDetail
    countryDetail = {
      name: "Aruba",
      capital: "Oranjestad",
      subregion: "Caribbean",
      region: Region.Americas,
      population: 106766,
      flag: 'https://flagcdn.com/aw.svg',
      languages: [
        {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
        }
      ],
      nativeName: "Aruba",
      topLevelDomain: [
        ".aw"
      ],
      currencies: [
        {
          "code": "AWG",
          "name": "Aruban florin",
          "symbol": "ƒ"
        }
      ]
    }
    expect(Object.keys(countryDetail)).toEqual(['name', 'capital', 'subregion', 'region', 'population', 'flag', 'languages', 'nativeName', 'topLevelDomain', 'currencies'])
  });
});
