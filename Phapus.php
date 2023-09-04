<?php 
include "connect.php";
$id = $_POST['id'];
mysqli_query($con,"delete from tabelcrud where id='$id'");
?>