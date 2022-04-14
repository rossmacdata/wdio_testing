const { setConstantValue } = require("typescript");
const { brotliCompress } = require("zlib");
const filePath = './my-screenshot.png'

let myUrl = 'http://zero.webappsecurity.com/'
let smallPause = 2000
let bigPause = 5000

describe('Search feature', () => {
    
    // beforeEach(async () => {
    //     await browser.url(myUrl)
    // })

    // Before each using own functions
    beforeEach(async () => {
        // Load homepage
        await loadWebsite()
    })

    it('Should search for keyboard input values', async () => {
        const header = await $('h2=Search Results:')
        let searchInput = await $('#searchTerm')
        await searchInput.waitForDisplayed()
        await searchInput.setValue('credit')
        await browser.keys('Enter')
        await expect(header).toHaveTextContaining('Search Results:')
        await browser.pause(bigPause)
    });
});

// This is a function to navigate to a website that we are using in the beforeEach
async function loadWebsite(){
    await browser.url(myUrl)
}