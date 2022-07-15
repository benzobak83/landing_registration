<?php 
require_once 'login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if  ($conn->connect_error) die ('connect Error');

$name_table = 'users';
$username = $_POST['reg__username'];
$password = $_POST['reg__password'];
$email = $_POST['reg__email'];
$hash = password_hash($password, PASSWORD_DEFAULT);


$query = "INSERT INTO users (login, password, email) VALUES ('$username', '$password', '$email')";
echo($query);
$result = $conn -> query($query);
if (!$result) die ('error insert into '.$name_table);
else echo('successful insert into '.$name_table);

?>