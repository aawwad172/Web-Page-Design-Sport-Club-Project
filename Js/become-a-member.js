
      document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        var isValid = true;

        var firstName = document.querySelector("#fname").value;
        if (firstName.trim() === "") {
          alert("Please enter your first name.");
          isValid = false;
        }

        var lastName = document.querySelector("#lname").value;
        if (lastName.trim() === "") {
          alert("Please enter your last name.");
          isValid = false;
        }

        var email = document.querySelector("#Email").value;
        if (email.trim() === "") {
          alert("Please enter your email.");
          isValid = false;
        }
        var phone = document.querySelector("#telNo").value;
        if (phone.trim() === "") {
          alert("Please enter your phone number.");
          isValid = false;
        }

        var birthdate = document.querySelector("#birthdate").value;
        if (birthdate.trim() === "") {
          alert("Please enter your birthdate.");
          isValid = false;
        }

        var sport = document.querySelectorAll(".form-check-input");
        var selected = false;
        for (var i = 0; i < sport.length; i++) {
          if (sport[i].checked) {
            selected = true;
            break;
          }
        }
        if (!selected) {
          alert("Please select a sport.");
          isValid = false;
        }

        if (isValid) {
          this.submit();
        }
      };
