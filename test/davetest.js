var { Builder, By, Key, until } = require('selenium-webdriver');
var mocha = require('mocha');
var assert = require('chai').assert

describe("Test Suite",function(){
    it("can find cheese", async function(){
        var driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('cheese',Key.RETURN);
        var title = await driver.getTitle();
        assert.equal(title, 'cheese - Google Search');
        // expect (title).equals('cheese - Google SEarch');
    })
})