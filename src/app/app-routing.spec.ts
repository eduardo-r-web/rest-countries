import { routes } from './app-routing.module';
describe( 'App routing', () => {
  it('Should have "" as path', () => {
    expect(routes[0].path).toBe('')
  });
  it('Should have v2 as path', () => {
    expect(routes[1].path).toBe('v2')
  });
} );