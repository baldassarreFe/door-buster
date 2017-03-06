import { DoorBusterPage } from './app.po';

describe('door-buster App', () => {
  let page: DoorBusterPage;

  beforeEach(() => {
    page = new DoorBusterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
