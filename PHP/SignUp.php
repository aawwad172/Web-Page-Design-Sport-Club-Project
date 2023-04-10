<?php
    // check if the form is submitted
    if(isset($_GET['submit-btn'])) {
        $firstName = $_GET['firstName'];
        $lastName = $_GET['lastName'];
        $username = $_GET['username'];
        $email = $_GET['email'];
        $password = $_GET['password'];
        $acceptTerms = $_GET['acceptTerms'];

        // check if all fields are filled
        if(!empty($firstName) && !empty($lastName) && !empty($username) && !empty($email) && !empty($password) && !empty($acceptTerms)) {
            // check if the email is in the correct format
            if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // check if the terms and conditions are accepted
                if($acceptTerms == "on") {
                    // insert the user data into the database
                    // code to connect to the database goes here
                        require '/PHP/connection.php';

                    // insert the user data into the database
                    $sql = "INSERT INTO users (firstName, lastName, username, email, password) VALUES ('$firstName', '$lastName', '$username', '$email', '$password')";
                    $query = mysqli_query($conn, $sql);

                    if the query is successful, redirect the user to the sign in page
                    if($query) {
                        header("Location: signin.html");
                    } else {
                        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
                } else {
                    echo "You must accept the terms and conditions to create an account.";
                }
            } else {
                echo "Invalid email address.";
            }
        } else {
            echo "Please fill in all fields.";
        }
    }
?>
