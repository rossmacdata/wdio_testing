const { brotliCompress } = require("zlib");

// Skip this set of tests using .skip. Only and .skip are 2 sides of same coin.
describe.skip('My first test suite', () => {
    it('My first wdio test', async () => {
        let myUrl = 'https://www.example.com/'
        let smallPause = 2000
        let bigPause = 5000

        await browser.url(myUrl)
        await browser.pause(smallPause)

        // Old way
        // let pageTitle = await browser.getTitle()
        // let pageUrl = browser.getUrl()

        // expect(pageTitle).toContain('Example Domain')
        // expect(pageUrl).toContain('https://www.example.com/')

        // Modern way
        await expect(browser).toHaveTitleContaining('Example Domain')
        await expect(browser).toHaveUrlContaining('example.com')

        let pageElement = await $('h1')
        await expect(pageElement).toExist()
        // Below will fail is it exists but is not displayed
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Example')

    });

    // only keyword runs only that test =====  it.only('test name')
    it('Forms and inputs', async () => {
        await browser.url('https://www.saucedemo.com/')
        let usernameInput = await $('#user-name')
        let passwordInput = await $('#password')
        let loginButton = await $('#login-button')

        // Add Value - Appends text
        // Set Value - Clears and adds text
        // Clear Value - Clears value
        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_sauce')
        await loginButton.click()
    
        let inventoryContainer = await $('#inventory_container')

        await expect(inventoryContainer).toBeDisplayed()

    });

    // You can target radio and checkboxes just with selector and click
    it('Select box and checkbox examples', async () => {
        await browser.url('https://devexpress.github.io/testcafe/example/')
        let selectBox = await $('#preferred-interface')

        await selectBox.selectByVisibleText('Both')
        let option = await $('option=Both')

        await expect(option).toBeSelected()

        let checkbox = await $('#remote-testing')
        await checkbox.click()

        let radio = await $('#macos')
        await radio.click()

        await browser.pause(5000)
    });

    it('Set browser size', async () => {
        let width = 400
        let height = 600
        await browser.setWindowSize(width,height)
        await browser.url('https://www.example.com/')

        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()
        
        await browser.pause(5000)
        
    });

    it('Device emulation', async () => {
        let responsiveURL = 'https://www.dropbox.com/'

        let mobile = [375,812]
        let tablet = [1024,768]
        let desktop = [1650,1050]
        await browser.setWindowSize(mobile[0],mobile[1])
        await browser.url(responsiveURL)
        await browser.pause(2000)

        await browser.setWindowSize(tablet[0],tablet[1])
        await browser.url(responsiveURL)
        await browser.pause(2000)

        await browser.setWindowSize(desktop[0],desktop[1])
        await browser.url(responsiveURL)
        await browser.pause(2000)
        
    });

    // Page or isolated area screenshot
    it.only('Screenshots', async () => {
        await browser.url('https://www.example.com/')
        await browser.saveScreenshot('my-screenshot.png')

        let title = await $('h1')
        await title.saveScreenshot('title-screenshot.png')
        
    });
});