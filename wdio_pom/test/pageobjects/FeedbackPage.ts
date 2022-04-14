import AbstractPage from "./AbstractPage"

class FeedbackPage extends AbstractPage{
    // Selectors here
    public get feedbackTitle() {
        return $('#feedback-title')
    }

    public get nameField() {
        return $('#name')
    }

    public get emailField() {
        return $('#email')
    }

    public get subjectField() {
        return $('#subject')
    }

    public get questionField() {
        return $('#comment')
    }

    public get submitFeedbackForm() {
        return $('[name="submit"]')
    }

    // Functions here
    public async assertFeedbackPagePresented() {
        await this.feedbackTitle.waitForDisplayed()
    }

    public async popAndSubFeedbackForm(name: string, email: string, subject: string, question: string) {
        await this.nameField.setValue(name)
        await this.emailField.setValue(email)
        await this.subjectField.setValue(subject)
        await this.questionField.setValue(question)
        await this.submitFeedbackForm.click()
    }

}

// This line makes the page available in the project.
export default new FeedbackPage()