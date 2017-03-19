import { AngularGettingStartedPage } from './app.po';

describe('angular-getting-started App', function() {
  let page: AngularGettingStartedPage;

  beforeEach(() => {
    page = new AngularGettingStartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
