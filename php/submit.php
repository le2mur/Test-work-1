<?php

include "database.php";

$name = $_POST['name'];
$comment = $_POST['comment'];
$date = date('d-m-Y h:i:s');

$query = $link->query("INSERT INTO testBase.comments (name, comment, data) VALUES ('$name', '$comment', '$date')");

$comments = "SELECT * FROM testBase.comments ORDER BY data DESC";

$result = mysqli_query($link, $comments);
$data = mysqli_fetch_array($result);
echo json_encode($data);


