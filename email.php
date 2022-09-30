<?php

$name = $_POST['txtName'];
$email = $_POST['txtEmail'];
$msg = $_POST['txtMessage'];

$subject = 'You Got Message From Portfolio';
$to = 'manukajayarathne.coma@gmail.com';
$from = $email;
$header = "from : ";


$message .= 'Name : ' . $name . "\n";
$message .= 'Email : ' . $email . "\n";
$message .= 'Message : ' . $msg;

$sendMail = mail($to,$subject,$msg,$header);

if($sendMail){
  echo "Email was sent...";
}else{
    echo "something went wrong";
}

?>


