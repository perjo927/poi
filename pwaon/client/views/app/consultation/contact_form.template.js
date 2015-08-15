
/* CONTACT FORM */
Template.contact_form.events({
    'submit form': function(event, template) {
        event.preventDefault();

        var formContainer = App.UI.parseForm(event);

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "fullname",
                method: App.UI.validateName
            },
            {
                name: "email",
                method: App.UI.validateEmail
            },
            {
                name: "textmessage",
                method: App.UI.validateTextArea
            }
        ];

        App.UI.validateForm(formFields, formContainer, function (isValid, error) {
            var errorMessage =
                "The input was faulty from the following fields: "
                + error
                + ". Please try again.";

            Template.contact_form.onValidationDone(isValid, errorMessage, formContainer);
        });
    }
});
