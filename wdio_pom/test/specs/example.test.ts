import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'
import Navbar from '../pageobjects/components/Navbar'
describe("Example test for POM", () => {
    it("Should load homepage and input credentials, no login", async () => {
        // Page objects and webdriverio can be used in same place.
        await HomePage.visit()
        // Abstracted page functions available across pages when you extend
        await HomePage.waitForSeconds(4)
        await Navbar.clickOnSignIn()
        await LoginPage.waitForSeconds(4)
        await LoginPage.assertLoginPagePresented()
        await LoginPage.fillCredentials('username', 'passwords')
        await LoginPage.clickOnCredentialSubmit()
        await LoginPage.waitForSeconds(4)
        await LoginPage.assertLoginPageErrorMessage()

    })

    it("Should load homepage, fill feedback form and submit", async () => {
        // Page objects and webdriverio can be used in same place.
        await HomePage.visit()
        await HomePage.waitForSeconds(4)
        await HomePage.feedbackLink.click()
        await FeedbackPage.popAndSubFeedbackForm('Ross Myname', 'name@email.net', 'my feedback', 'what is going on?')
        await FeedbackPage.waitForSeconds(4)
    })
})