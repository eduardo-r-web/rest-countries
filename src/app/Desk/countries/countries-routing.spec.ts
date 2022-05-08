import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { routes } from './countries-routing.module';

describe('countries routing', () => {
    it('Should have "" as path', () => {
        expect(routes[0].path).toBe('');
        expect(routes[0].component).toBe(CountriesComponent)
    });
    it('Should have country/:name as path', () => {
        expect(routes[1].path).toBe('country/:name');
        expect(routes[1].component).toBe(CountryDetailsComponent)
    });
});