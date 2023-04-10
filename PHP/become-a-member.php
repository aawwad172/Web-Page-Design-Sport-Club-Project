<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "registration";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 

  $firstName = $_POST['fname'];
  $lastName = $_POST['lname'];
  $email = $_POST['Email'];
  $phone = $_POST['telNo'];
  $birthdate = $_POST['birthdate'];
  $sport = $_POST['choose'];

  $sql = "INSERT INTO registration (firstName, lastName, email, phone, birthdate, sport)
  VALUES ('$firstName', '$lastName', '$email', '$phone', '$birthdate', '$sport')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>