<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "login";
/*Create connection*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost:5500, http://127.0.0.1:5174, http://127.0.0.1:5173');
header('Access-Control-Allow-Credentials: true');
$conn = mysqli_connect($servername, $username, $password, $db);
if (mysqli_connect_errno()) {
	die("Connection failed: " . mysqli_connect_error());
} else {
	echo "Connected successfully!";
}
?>