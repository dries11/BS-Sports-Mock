import { DIAAMockPage } from './app.po';

describe('diaa-mock App', () => {
  let page: DIAAMockPage;

  beforeEach(() => {
    page = new DIAAMockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
