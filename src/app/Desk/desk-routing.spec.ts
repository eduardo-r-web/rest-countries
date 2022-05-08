import { routes } from './desk-routing.module';

describe('Desk routing', () => {
    it('Should have "" as path', () => {
        expect(routes[0].path).toBe('')
    });
    it('Should have countries as path', () => {
        expect(routes[1].path).toBe('countries')
    });
})