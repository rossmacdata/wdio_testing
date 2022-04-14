import AbstractPage from "../AbstractPage"

class Navbar extends AbstractPage{
    // Selectors here
    public get signInButton() {
        return $('#signin_button')
    }

    // Functions here
    public async clickOnSignIn() {
        await this.signInButton.click()
    }

}

// This line makes the page available in the project.
export default new Navbar()