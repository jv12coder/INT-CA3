function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
$(document).ready(function(){
  $('input').attr('required',true);
});

function clicked(){
  alert("successfully submitted")
}
function reserve(){
  alert("successfully booked")
}
