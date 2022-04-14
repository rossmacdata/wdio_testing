const { randomFill } = require("crypto");
const { setConstantValue } = require("typescript");
const { brotliCompress } = require("zlib");
const filePath = './my-screenshot.png'

let myUrl = 'http://zero.webappsecurity.com/'
let smallPause = 2000
let bigPause = 5000

describe('Feedback form', () => {
    
    // beforeEach(async () => {
    //     await browser.url(myUrl)
    // })

    // Before each using own functions
    beforeEach(async () => {
        // Load homepage
        await loadWebsite()
    })

    it('Should submit form with all values', async () => {
        const header = await $('h3=Feedback')
        let feedbackLink = await $('#feedback')
        let yourName = await $('#name')
        let yourEmail = await $('#email')
        let subject = await $('#subject')
        let comment = await $('#comment')
        let submit = await $('[name="submit"]')

        await feedbackLink.waitForDisplayed()
        await feedbackLink.click()
        await yourName.setValue('Name McNameyface')
        await yourEmail.setValue('myemail@email.net')
        await subject.setValue('Not happy with service!')
        await comment.setValue('Here is why I am not happy. Blah blah blah.')

        await submit.click()
        await expect(browser).toHaveUrlContaining('sendFeedback.html')
        await expect(header).toHaveTextContaining('Feedback')
        await browser.pause(bigPause)
    });
});

// This is a function to navigate to a website that we are using in the beforeEach
async function loadWebsite(){
    await browser.url(myUrl)
}