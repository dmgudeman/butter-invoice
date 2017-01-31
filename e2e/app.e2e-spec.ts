import { BetterInvoicePage } from './app.po';

describe('better-invoice App', function() {
  let page: BetterInvoicePage;

  beforeEach(() => {
    page = new BetterInvoicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
