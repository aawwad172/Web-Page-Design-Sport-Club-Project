$(document).ready(function () {
    $("#submit-btn").click(function (e) {
        var isValid = true;

        var FirstName = $('#firstName').val();
        FirstName = FirstName.trim();
        if (FirstName == null || FirstName == " ") {
            FirstName.addClass("is-invalid");
            isValid = false;
        } else {
            FirstName.removeClass("is-invalid");
        }

        var LastName = $('#lastName').val();
        LastName = LastName.trim();
        if (LastName == null || LastName == " ") {
            LastName.addClass("is-invalid");
            isValid = false;
        } else {
            LastName.removeClass("is-invalid");
        }

        var Username = $('#username').val();
        Username = Username.trim();
        if (Username == null || Username == " ") {
            Username.addClass("is-invalid");
            isValid = false;
        } else {
            Username.removeClass("is-invalid");
        }


        // Define a regular expression for email validation
        var emailRegex = /^([a-zA-Z0-9_\.\-]) + \@(([a-zA-Z0-9\-])+\.) + ([a-zA-Z0-9]{2,4})+$/;
        $("#submit-btn").click(function () {
            // Get the value of the email input
            var email = $("#email").val();

            // Test the email against the regular expression
            if (!emailRegex.test(email)) {
                // If the email is invalid, show an error message
                alert("Invalid email address");
            }
        });
    });

    // Show password toggle
    $("#togglePassword").click(function() {
        var input = $("#password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});

