import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries.service';

import { CountriesFilterComponent } from './countries-filter.component';

class CountriesServiceStub{
  getCountriesAll(){
    return of([]);
  }
}

describe('CountriesFilterComponent', () => {
  let component: CountriesFilterComponent;
  let fixture: ComponentFixture<CountriesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesFilterComponent ],
      providers: [
        { provide: CountriesService, useClase: CountriesServiceStub }
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
