<?php
$field_name = $_POST['cf_name'];
$field_subject = $_POST['cf_topic'];
$field_email = $_POST['cf_mail'];
$field_message = $_POST['cf_message'];

$mail_to = 'marian.maschke@yahoo.com';
$subject = 'Message from Portfolio Page. Subject: '.$field_subject;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will contact you shortly.');
		window.location = '../../index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please send an email to marian.maschke@yahoo.com');
		window.location = '../../index.html';
	</script>
<?php
}
?>