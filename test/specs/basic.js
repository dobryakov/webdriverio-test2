const assert = require('assert');

describe('webdriver.io page', () => {

    it('C4 - should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('C7 - should fails', () => {
        //browser.url('https://ya.ru');
        //const title = browser.getTitle();
        //assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        assert.strictEqual('a', 'b');
    });

});
