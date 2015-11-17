$(function() {
  $('#datepicker').datetimepicker({
    format: 'LL'
  });
});

$(function() {
  $('#timepicker').datetimepicker({
    format: 'LT'
  });
});

// function ParticipantEmail(String email) {
//   var table = document.getElementById("tableEmail");
//   var tableBody = table.getElementsByTagName("tbody").item(0);
//   var tbRows = tableBody.rows.length;
//
//   if (email==undefined  && tbRows>0){
//     tableBody.deleteRow(-1);
//     return;
//   }
//
//   var row = tableBody.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//
// }
