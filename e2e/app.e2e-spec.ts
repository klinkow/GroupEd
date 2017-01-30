import { GroupEdPage } from './app.po';

describe('group-ed App', function() {
  let page: GroupEdPage;

  beforeEach(() => {
    page = new GroupEdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
