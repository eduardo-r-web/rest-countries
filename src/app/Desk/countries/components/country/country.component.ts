import { Component, Input, OnInit } from '@angular/core';
import { Country, SummaryCountry } from 'src/app/core/model/countries.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {

  @Input() country: SummaryCountry | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
