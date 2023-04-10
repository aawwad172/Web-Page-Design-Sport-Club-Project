<?php 
    require '/PHP/connection.php';

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $email = $_GET['email'];
    $password = $_GET['password'];
    $rememberMe = isset($_GET['rememberMe']);
    //validate the email and password
    if(validate($email,$password)){
      //login the user
      loginUser($email,$rememberMe);
    }else{
      echo 'Invalid email or password';
    }
}
 
function validate($email, $password){
  //validation logic here
  return true;
}
 
function loginUser($email,$rememberMe){
  //login logic here
  if($rememberMe){
    //set cookie for remember me
    setcookie('rememberMe', $email, time() + (86400 * 30));
  }
  //start session
  //redirect to dashboard
}
?>
