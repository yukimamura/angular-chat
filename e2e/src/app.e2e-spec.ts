import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import { element, by } from 'protractor';

describe('workspace-project App', () => {
//  let page: AppPage;
//
//  beforeEach(() => {
//    page = new AppPage();
//  });
//
//  it('should display welcome message', () => {
//    page.navigateTo();
////    browser.sleep(5000);
//    expect(page.getTitleText()).toEqual('Angular Chat!!!');
//  });
//
//  afterEach(async () => {
//    // Assert that there are no errors emitted from the browser
//    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//    expect(logs).not.toContain(jasmine.objectContaining({
//      level: logging.Level.SEVERE,
//    } as logging.Entry));
//  });

  it('e2eテストの動作確認', () => {
    // URLを指定してWebページを表示
    browser.get(browser.baseUrl) as Promise<any>;
    browser.sleep(1000);
    expect(element(by.css('app-root h1')).getText()).toEqual('Angular Chat!!!');

    // ページ内のHTML要素を取得
//    const textBox1 = element(by.id('textBox1'));
    const signupLink = element(by.linkText('ログイン'));

    // ログイン画面への遷移検証
    signupLink.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');

    // ログインの動作検証
    element(by.name('email')).sendKeys('use@gmail.com');
    element(by.name('password')).sendKeys('useeng');
    browser.sleep(2000);
    element(by.buttonText('ログイン')).click();
    browser.sleep(3000);

    // チャット入力動作検証
    element(by.name('content')).sendKeys('チャット自動入力テスト');
    browser.sleep(3000);
    element(by.buttonText('送信')).click();
    browser.sleep(3000);


  });

});
