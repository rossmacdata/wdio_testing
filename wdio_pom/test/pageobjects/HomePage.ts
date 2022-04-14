import AbstractPage from "./AbstractPage"

class HomePage extends AbstractPage{
    // Selectors here
    public get feedbackLink() {
        return $('#feedback')
    }

    // Functions here
    public async visit() {
        await browser.url('http://zero.webappsecurity.com/index.html')
    }

    public async clickOnFeedbackLink() {
        await this.feedbackLink.click()
    }

}

// This line makes the page available in the project.
export default new HomePage()