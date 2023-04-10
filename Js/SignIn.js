$(document).ready(function() {
  $("#submit-btn").click(function(e) {
    var isValid = true;

    // Get the values of the email and password inputs
    var email = $("#email").val();
    var password = $("#password").val();

    // Check if the email input is empty
    if (email === "") {
      $("#email").addClass("is-invalid");
      isValid = false;
    } else {
      $("#email").removeClass("is-invalid");
    }

    // Check if the password input is empty
    if (password === "") {
      $("#password").addClass("is-invalid");
      isValid = false;
    } else {
      $("#password").removeClass("is-invalid");
    }

    // Check if the form is valid
    if (!isValid) {
      e.preventDefault();
    }
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