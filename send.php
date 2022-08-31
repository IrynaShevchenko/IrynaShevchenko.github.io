<?php
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
$adress = stripslashes(htmlspecialchars($_POST['adress']));
$count = stripslashes(htmlspecialchars($_POST['count']));
$bath = stripslashes(htmlspecialchars($_POST['bath']));
$type = stripslashes(htmlspecialchars($_POST['type']));

if(empty($phone)){
echo '<meta http-equiv="refresh" content="2; url=http://'.$_SERVER['SERVER_NAME'].'">';
}
else{
$subject = 'Замовлення з сайту "CleanCorner" '; // заголовок письмя
$addressat = "ira.shevchenco00@gmail.com"; // Ваш Электронный адрес
$success_url = './spasibo.html?name='.$_POST['count'].'&phone='.$_POST['bath'].'&mail='.$_POST['type'].'';
$message = "ПІБ: {$name}\n
            Номер телефону: {$phone}\n
            Адреса: {$mail}\n
            Квартира/Офіс: {$count}\n
            Ванна кімната: {$bath}\n
            Тип прибирання: {$type}\n";
$verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");
if ($verify == 'true'){
    header('Location: '.$success_url);
    exit;
}
else
    {
    echo '<h1 style="color:red;">Произошла ошибка!</h1>';
    }
}
?>

