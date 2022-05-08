import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries.service';

import { CountriesComponent } from './countries.component';


class CountriesServiceStub{
  getCountriesAll(){
    return of([]);
  }
}

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesComponent ],
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
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
