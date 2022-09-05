<?php
$subject = 'You Got Message From Portfolio';
$to = 'manukajayarathne.coma@gmail.com';
$emailTo = $_REQUEST['txtEmail'];

$name = $_REQUEST['txtName'];
$email = $_REQUEST['txtEmail'];
$msg = $_REQUEST['txtMessage'];

$email_from = $name.'<'.$email.'>';

$headers = "MIME-Version: 1.1";
$headers .= "Content-type: text/html; charset=iso-8859-1";
$headers .= "From: ".$name.'<'.$email.'>'."\r\n"; // Sender's E-mail
$headers .= "Return-Path:"."From:" . $email;

$message .= 'Name : ' . $name . "\n";
$message .= 'Email : ' . $email . "\n";
$message .= 'Message : ' . $msg;

if (@mail($to, $subject, $message, $email_from))
{
    echo 'sent';
}
else
{
    echo 'failed';
}


