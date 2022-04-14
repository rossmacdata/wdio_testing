const { setConstantValue } = require("typescript");
const { brotliCompress } = require("zlib");
const filePath = './my-screenshot.png'

let myUrl = 'https://the-internet.herokuapp.com/upload'
let smallPause = 2000
let bigPause = 5000

describe('Advanced testing', () => {
    
    // beforeEach(async () => {
    //     await browser.url(myUrl)
    // })

    // Before each using own functions
    beforeEach(async () => {
        await loadWebsite()
    })

    it('File upload 1', async () => {
        const remoteFilePath = await browser.uploadFile(filePath)

        
        
        let submitted = $('#content > div > h3')
        await expect(submitted).toBeDisplayed()

        await browser.pause(smallPause)

    });

    it('File upload 2', async () => {
        // const remoteFilePath = await browser.uploadFile(filePath)

        // await $('#file-upload').setValue(remoteFilePath)
        // await $('#file-submit').click()
        
        // This custom command is in the wdio.conf.js
        let fileUpload = '#file-upload'
        let fileSubmit = '#file-submit'

        await browser.customFileUpload(filePath, fileUpload, fileSubmit)

        let submitted = $('#content > div > h3')
        await expect(submitted).toBeDisplayed()

        await browser.pause(smallPause)

    });

    it('File upload 3', async () => {
        const remoteFilePath = await browser.uploadFile(filePath)

        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()
        
        let submitted = $('#content > div > h3')
        await expect(submitted).toBeDisplayed()

        await browser.pause(smallPause)

        

    });

    it('Display title and URL', async () => {
        const results = await browser.getTitleAndUrl()
        console.log('Title = ' + results.title)
        console.log('URL = ' + results.url)

        await expect(results.title).toContain('Internet')
        await expect(results.url).toContain('the-internet.herokuapp.com/upload')

        await browser.waitAndClick('#file-submit')
        await browser.pause(bigPause)

    });

    it('Change browser session', async () => {
        console.log('SESSION BEFORE RELOAD ' + browser.sessionId)
        await browser.reloadSession()
        console.log('SESSION AFTER RELOAD ' + browser.sessionId)

    });

    it('Create and switch new window', async () => {
        await browser.url('https://www.google.com/')
        await browser.newWindow('https://webdriver.io/')
        await browser.pause(smallPause)
        await browser.switchWindow('google.com')
        await browser.pause(smallPause)

    });

    it('Network throttling', async () => {
        await browser.throttle('Regular2G')
        await browser.url('https://webdriver.io/')
        await browser.pause(smallPause)

        await browser.throttle('Regular4G')
        await browser.url('https://webdriver.io/')
        await browser.pause(smallPause)

        await browser.throttle('offline')
        await browser.url('https://webdriver.io/')
        await browser.pause(smallPause)
    });

    it('Execute javascript code', async () => {
        const result = await browser.execute(
            (a, b) => {
                return a + b
        },
        5,
        10
        )
        await expect(result).toBe(15)
    });

    it.only('Execute async javascript code', async () => {
        const result = await browser.executeAsync(
            (a, b, done) => {
                setTimeout(() => {
                    done(a + b)
                }, 3000);
        },
        5,
        10
        )
        await expect(result).toBe(15)
    });
});

// This is a function to navigate to a website that we are using in the beforeEach
async function loadWebsite(){
    await browser.url(myUrl)
}