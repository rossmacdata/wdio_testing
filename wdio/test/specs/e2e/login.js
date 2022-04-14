const { setConstantValue } = require("typescript");
const { brotliCompress } = require("zlib");
const filePath = './my-screenshot.png'

let myUrl = 'http://zero.webappsecurity.com/'
let smallPause = 2000
let bigPause = 5000

describe('Login flow', () => {
    
    // beforeEach(async () => {
    //     await browser.url(myUrl)
    // })

    // Before each using own functions
    beforeEach(async () => {
        // Load homepage
        await loadWebsite()
    })

    it('Attempt to login to Zero app with invalid login credentials', async () => {
        let signInButton = '#signin_button'
        let loginButton = '#login_form > div.form-actions > input'
        let loginForm = await $('#login_form')
        let usernameInput = await $('#user_login')
        let passwordInput = await $('#user_password')
        let error = await $('#login_form > div.alert.alert-error')
        await expect(browser).toHaveTitleContaining('Zero - Personal')
        await expect(browser).toHaveUrlContaining('zero.webappsecurity')
        // Click sign in button
        await browser.waitAndClick(signInButton)  
        await expect(browser).toHaveUrlContaining('login.html')
        await expect(loginForm).toExist()
        await expect(loginForm).toBeDisplayed()
        // Fill in login form
        await usernameInput.setValue('test')
        await passwordInput.setValue('test')
        // Click login button
        await browser.waitAndClick(loginButton)
        // Check error
        await expect(error).toHaveTextContaining('Login and/or password are wrong')
        await browser.pause(bigPause)
    });

    it('Reset account password', async () => {
        const email = 'ross@test.net'
        const message = await $('.span6')
        // Get element with link
        let forgotPasswordLink = '=Forgot your password ?'
        // Get element with ID
        let signInButton = '#signin_button'
        let loginForm = await $('#login_form')
        let emailInput = await $('#user_email')
        // Get element with name
        let sendPass = await '[name="submit"]'
        await expect(browser).toHaveTitleContaining('Zero - Personal')
        await expect(browser).toHaveUrlContaining('zero.webappsecurity')
        // Click sign in button
        await browser.waitAndClick(signInButton)  
        await expect(browser).toHaveUrlContaining('login.html')
        await expect(loginForm).toExist()
        await expect(loginForm).toBeDisplayed()
        // Click forgotten password link
        await browser.waitAndClick(forgotPasswordLink)
        // Input email
        await emailInput.setValue(email)
        // Send password
        await browser.waitAndClick(sendPass)
        await expect(message).toHaveTextContaining('Your password will be sent to the following email')

    });
});

// This is a function to navigate to a website that we are using in the beforeEach
async function loadWebsite(){
    await browser.url(myUrl)
}