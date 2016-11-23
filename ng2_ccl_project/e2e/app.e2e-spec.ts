import { Ng2CclProjectPage } from './app.po';

describe('ng2-ccl-project App', function() {
  let page: Ng2CclProjectPage;

  beforeEach(() => {
    page = new Ng2CclProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
