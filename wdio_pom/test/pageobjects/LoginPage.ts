import AbstractPage from "./AbstractPage"

class LoginPage extends AbstractPage{
    // Selectors here
    public get loginForm() {
        return $('#login_form')
    }

    public get loginInput() {
        return $('#user_login')
    }

    public get passwordInput() {
        return $('#user_password')
    }

    public get submitCredentials() {
        return $('[name="submit"]')
    }

    public get errorMessage() {
        return $('.alert-error')
    }

    // Functions here
    public async assertLoginPagePresented() {
        await this.loginForm.waitForDisplayed()
    }

    public async fillCredentials(user: string, password: string) {
        await this.loginInput.setValue(user)
        await this.passwordInput.setValue(password)
    }

    public async clickOnCredentialSubmit() {
        await this.submitCredentials.click()
    }

    public async assertLoginPageErrorMessage() {
        await expect(this.errorMessage).toHaveTextContaining('Login and/or password are wrong.')
    }
}

// This line makes the page available in the project.
export default new LoginPage()