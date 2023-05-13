<?php
include '../config.php';
session_start();

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];


$duplicate = mysqli_query($conn, "select * from users where email='$email'");

if (mysqli_num_rows($duplicate) > 0) {
    echo json_encode(array("statusCode" => 201));
} else {
    $sql = "INSERT INTO `users`( `name`, `email`, `password`) 
			VALUES ('$name','$email','$password')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array("statusCode" => 200));
    } else {
        echo json_encode(array("statusCode" => 201));
    }
}

mysqli_close($conn);

?>