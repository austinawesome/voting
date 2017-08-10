$(document).ready(function()  {
  var age=parseInt(prompt("whats your age"));
  if (age>=18) {
    $("#over-18").show();
  } else {
    $("#under-18").show();
  }
});
