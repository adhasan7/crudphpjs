   <!-- Awal Modal -->
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Hapus Data
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                <input hidden type='text' name='id' value="<?= $_POST['id']?>">
                  <?php 
                  include "connect.php";
                  $id = $_POST['id'];
                  $data = mysqli_query($con,"select * from tabelcrud where id='$id'");
                  while ($tamp = mysqli_fetch_array($data)){
                  
                  ?>
                  Apa Anda Yakin Ingin menghapus <?= $tamp['taks']?> ??
                  
                </div>
                <div class="modal-footer">
                  <button
                    onclick="Pdelet(<?= $tamp['id']?>)"
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Hapus
                  </button>
                         <?php } ?>
                  <button 
                      type="button"
                    data-bs-dismiss="modal"
                  class="btn btn-primary">cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- Akhir Modal -->