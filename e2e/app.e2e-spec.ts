import { PoliticalManagerPage } from './app.po';

describe('political-manager App', () => {
  let page: PoliticalManagerPage;

  beforeEach(() => {
    page = new PoliticalManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
