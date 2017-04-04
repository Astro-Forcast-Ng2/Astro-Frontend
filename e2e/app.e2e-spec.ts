import { AstroFrontendPage } from './app.po';

describe('astro-frontend App', function() {
  let page: AstroFrontendPage;

  beforeEach(() => {
    page = new AstroFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
