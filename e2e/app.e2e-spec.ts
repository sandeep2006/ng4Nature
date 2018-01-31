import { Ng4NaturePage } from './app.po';

describe('ng4-nature App', function() {
  let page: Ng4NaturePage;

  beforeEach(() => {
    page = new Ng4NaturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
