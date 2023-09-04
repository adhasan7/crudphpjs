<?php
include 'connect.php';
$taks = $_POST['taks'];
$descrip = $_POST['deskripsi'];
mysqli_query($con,"insert into tabelcrud values (null,'$taks','$descrip')");
?>