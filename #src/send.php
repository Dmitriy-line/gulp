<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$to = "dpasternak011@gmail.com";
$subject ='Отправлена заявка с сайтаDktom';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email телефон $phone";
$headers = 'From: '.$email . "\r\n" .
    'Reply-To: '.$email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$success = mail($to,$subject,$message,$headers);
if ($success) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	print_r(error_get_last());
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

