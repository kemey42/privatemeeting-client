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

function AddParticipantEmail() {
  var email = document.getElementById("addEmail").value;
  var table = document.getElementById("tableEmail");
  var tableBody = table.getElementsByTagName("tbody").item(0);
  var tbRows = tableBody.rows.length;

  if (email=="" || email.indexOf('@')===-1 || email.indexOf(' ')>=0){
    return;
  }

  var row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = tbRows+1;
  cell2.innerHTML = email.toLowerCase();
  cell3.innerHTML = '<span class="delX" onclick="deleteRow(this)">&times</span>';

  document.getElementById("addEmail").value = "";
}

function deleteRow(r) {
  var table = document.getElementById("tableEmail");
  var tableBody = table.getElementsByTagName("tbody").item(0);
  var i = r.parentNode.parentNode.rowIndex;
  tableBody.deleteRow(i-1);
}
