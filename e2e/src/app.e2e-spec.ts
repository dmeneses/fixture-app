import { element } from 'protractor';

import { AppPage } from './app.po';

describe('Fixture App', () => {
  let page: AppPage;


  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getGameListTitle().getText()).toEqual('Available Games');
  });

  it('should display the list of games', () => {
    page.navigateTo();
    page.getGames().then(function(games) {
      expect(games.length).toBe(3);
      expect(games[0].getText()).toBe('Inglaterra - Espania');
      expect(games[1].getText()).toBe('Bolivia - Brasil');
      expect(games[2].getText()).toBe('China - Japon');
    });
  });

  it('should display the score setter when clicking on one game', () => {
    page.navigateTo();
    page.clickOnGameOnIndex(1);
    expect(page.getGameSelectedTitle().getText()).toEqual('Selected Game');
  });

  it('should increment score when clicking on the left button', () => {
    page.navigateTo();
    page.clickOnGameOnIndex(1);
    page.clickOnLeftIncrementScore();
    expect(page.getLeftScore().getText()).toEqual('1');
    page.clickOnLeftIncrementScore();
    expect(page.getLeftScore().getText()).toEqual('2');
    expect(page.getRightScore().getText()).toEqual('0');
  });

  it('should increment score when clicking on the right button', () => {
    page.navigateTo();
    page.clickOnGameOnIndex(1);
    page.clickOnRightIncrementScore();
    expect(page.getRightScore().getText()).toEqual('1');
    page.clickOnRightIncrementScore();
    expect(page.getRightScore().getText()).toEqual('2');
    expect(page.getLeftScore().getText()).toEqual('0');
  });
});
