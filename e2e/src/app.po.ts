import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getGameListTitle(): any {
    return element(by.css('.game-list-title'));
  }

  getGameSelectedTitle(): any {
    return element(by.css('.game-selected-title'));
  }

  clickOnGameOnIndex(index: any): any {
    this.getGames().get(index).click();
  }


  getGames(): ElementArrayFinder {
    return element.all(by.tagName('li'));
  }

  getRightScore(): any {
    return element(by.css('.right-score'));
  }

  clickOnRightIncrementScore(): any {
    this.getRightIncrementScore().click();
  }

  getLeftScore(): any {
    return element(by.css('.left-score'));
  }

  clickOnLeftIncrementScore(): any {
    this.getLeftIncrementScore().click();
  }

  getLeftIncrementScore(): any {
    return element.all(by.tagName('button')).get(0);
  }

  getRightIncrementScore(): any {
    return element.all(by.tagName('button')).get(1);
  }
}
