function load() {
  $(document).ready(function () {
    setTimeout(function () {
      $("#Tdata").load("data.php");
    }, 1000);
  });
}

function reset() {
  document.querySelector("input[name=Tasks]").value = "";
  document.querySelector("textarea[name=Description").value = "";
}

function simData() {
  var taks = document.querySelector("input[name=Tasks]").value;
  var description = document.querySelector("textarea[name=Description]").value;
  console.log(description);
  $.post("simpan.php", { taks: taks, deskripsi: description }, function () {
    load();
    alert(taks + description);
  });

  reset();
}

function edit(e) {
  $.ajax({
    type: "post",
    url: "edit.php",
    data: "id=" + e,
    success: function (data) {
      $("#modalEdit").html(data); //menampilkan data ke dalam modal
    },
  });
  $(document).ready(function () {
    setTimeout(function () {
      $("#Tdata").load("data.php");
    });
  });
}

function Update() {
  id = document.querySelector("input[name=id]").value;
  taks = document.querySelector("input[name=Taks]").value;
  descrip = document.querySelector("textarea[name=Descrip]").value;
  console.log(descrip);
  $.post("Pedit.php", { id: id, taks: taks, descrip: descrip }, function () {
    load();
  });
  $(document).ready(function () {
    setTimeout(function () {
      $("#Tdata").load("data.php");
    });
  });
}

function delet(e) {
  $.ajax({
    type: "post",
    url: "hapus.php",
    data: "id=" + e,
    success: function (data) {
      $("#modalEdit").html(data); //menampilkan data ke dalam modal
    },
  });
  $(document).ready(function () {
    setTimeout(function () {
      $("#Tdata").load("data.php");
    });
  });
}
function Pdelet(e) {
  $.post("Phapus.php", { id: e }, function () {
    load();
    alert("Berhasil Di Hapus");
  });
  $(document).ready(function () {
    setTimeout(function () {
      $("#Tdata").load("data.php");
    });
  });
}

$(document).ready(function () {
  setTimeout(function () {
    $("#Tdata").load("data.php");
  });
});

// bang edo baru
// function load(){
//   $(document).ready(function(){
// setTimeout(function(){
// $("#Tdata").load('data.php')
// },1000);
// });
// }
// function simData() {
// var taks = document.querySelector("input[name=Tasks]").value;
// var description = document.querySelector("textarea[name=Description]").value;
// console.log(description);
// $.post("simpan.php",{ taks: taks, deskripsi: description },function () {
// load()
// alert(taks+description);
// });
// document.querySelector("input[name=Tasks]").value = "";
// document.querySelector("textarea[name=Description]").value = "";

// }

// function edit(e){
// $.ajax({
//       type : 'post',
//       url : 'edit.php',
//       data :  'id='+ e,
//       success : function(data){
//       $('#modalEdit').html(data);//menampilkan data ke dalam modal
//       }
//   });
// }

// function Update(){
// id = document.querySelector("input[name=id]").value;
// taks = document.querySelector("input[name=Taks]").value;
// descrip = document.querySelector("textarea[name=Descrip]").value;
// console.log(descrip);
// $.post("Pedit.php",{id: id, taks: taks, descrip: descrip},
// function(){
// load()
// alert("data berhasil di edit");
// });
// }

// function delet(e){
// $.ajax({
//       type : 'post',
//       url : 'hapus.php',
//       data :  'id='+ e,
//       success : function(data){
//       $('#modalEdit').html(data);//menampilkan data ke dalam modal
//       }
//   });
// }
// function Pdelet(e){
// $.post("Phapus.php",{id: e},
// function(){
// load()
// alert('Berhasil Di Hapus');
// });
// }

// $(document).ready(function(){
// setTimeout(function(){
// $("#Tdata").load('data.php')
// },);
// });
// [00.23, 3/9/2023] Edo: Nih solusi main js nya bg
