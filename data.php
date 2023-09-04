  <table id="Tdata" class="table table-bordered table-striped table-hover">
            <tr>
              <th>id</th>
              <th>Tasks</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
<?php 
include "connect.php";
$select = mysqli_query($con,"select * from tabelcrud");
while ($data = mysqli_fetch_array($select)){
 
?>            
<tr>
              <td><?= $data['id']?></td>
              <td><?= $data['taks']?></td>
              <td><?= $data['description']?></td>
              
              <td>
                <a href="#" class="btn btn-warning"   
                class="btn btn-success mb-3"
            data-bs-toggle="modal"
            data-bs-target="#modalEdit"
            onclick="edit(<?= $data['id']?>)">Edit</a>
                <a href="#" class="btn btn-danger" 
                    data-bs-toggle="modal"
            data-bs-target="#modalEdit"
                onclick="delet(<?= $data['id']?>)">Delete</a>
                </td>
                </tr>
<?php
}
?>       
         </table>