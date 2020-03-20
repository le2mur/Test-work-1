<?php

$link = mysqli_connect('localhost', 'admin', 'dnkislota', 'testBase');
$link->set_charset("utf8"); 

if(mysqli_connect_errno()) {
  echo 'Ошибка при подключении к базе данных ('.mysqli_connect_errno().'): ' . mysqli_connect_error();
  exit();
}
