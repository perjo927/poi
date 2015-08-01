Template.footer.events({
    "submit form": function (event, template) {
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
                "F�ljande formul�r hade felaktig data: "
                + error
                + ". Var god f�rs�k igen.";

            Footer.onValidationDone(isValid, errorMessage, formContainer);
        });
    }
});


