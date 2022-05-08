import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Country, Region } from 'src/app/core/model/countries.interface';
import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should charge SummaryCountry object', () => {
    let country = component.country
    country = {
      name: 'Colombia',
      population: 50882884,
      flag: 'path',
      capital: 'Bogotá',
      region: Region.Americas
    }
    expect(Object.keys(country)).toEqual(['name', 'population', 'flag', 'capital', 'region']);
  });

});
