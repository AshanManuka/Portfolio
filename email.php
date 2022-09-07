<?php
$subject = 'You Got Message From Portfolio';
$to = 'manukajayarathne.coma@gmail.com';
$emailTo = $_REQUEST['txtEmail'];

$name = $_REQUEST['txtName'];
$email = $_REQUEST['txtEmail'];
$msg = $_REQUEST['txtMessage'];

$email_from = $name.'<'.$email.'>';

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
?>


