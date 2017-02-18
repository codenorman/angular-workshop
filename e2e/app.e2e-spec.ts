import { CodeNormanPage } from './app.po';

describe('code-norman App', function() {
  let page: CodeNormanPage;

  beforeEach(() => {
    page = new CodeNormanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
