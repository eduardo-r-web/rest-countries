import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryDetail } from 'src/app/core/model/countries.interface';
import { CountriesService } from 'src/app/core/services/countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.sass']
})
export class CountryDetailsComponent implements OnInit {

  countryDetail: CountryDetail | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService) { 
    const { name } = this.activatedRoute.snapshot.params;
    this.countriesService.getCountry(name)
      .subscribe( countryDetail => {
        this.countryDetail = countryDetail;
      });
  }

  ngOnInit(): void {
  }

}
