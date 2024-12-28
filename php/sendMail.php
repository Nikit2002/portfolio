<?php
$message = ""; 
if(isset($_POST['submit'])){
	$to = "nikitad2020@gmail.com"; 
	$name = $_POST['name'];
	$from = $_POST['email'];
	$messageText = $_POST['message'];
	$message = "<!DOCTYPE html>
	<html>
	<head>
	</head>
	<body>
	<table rules='all' border='1' cellpadding='10'>
    <tr><td colspan='2'><strong>Contact Form Details</strong></td></tr>
    <tr>
        <td><strong>Name:</strong></td>
        <td>".$_POST['name']."</td>
    </tr>
    <tr>
        <td><strong>Email:</strong></td>
        <td>".$_POST['email']."</td>
    </tr>
    <tr>
        <td><strong>Message:</strong></td>
        <td>".$_POST['message']."</td>
    </tr>
	</table>
	</body>
	</html>";
	
	$subject = "Contact Form Details";
	
	// Set content-type header for sending HTML email 
	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	$headers .= "From:" . $from . "\r\n";
	
	$result = mail($to,$subject,$message,$headers);
}
?>