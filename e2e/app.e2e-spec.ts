import { Angular26Page } from './app.po';

describe('angular26 App', function() {
  let page: Angular26Page;

  beforeEach(() => {
    page = new Angular26Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
