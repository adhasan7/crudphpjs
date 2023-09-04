<?php
include "connect.php";
$id = $_POST['id'];
$taks = $_POST['taks'];
$descrip = $_POST['descrip'];
$updt = mysqli_query($con,"update tabelcrud set taks='$taks',description='$descrip' where id='$id'");

?>