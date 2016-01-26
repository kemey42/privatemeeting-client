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

function addParticipantEmail() {
  var email = document.getElementById("addEmail").value;
  var table = document.getElementById("tableEmail");
  var tableBody = table.getElementsByTagName("tbody").item(0);
  var tbRows = tableBody.rows.length;

  if (!validateEmail(email)) {
    console.log(email + " email entered invalid");
    return;
  }

  var row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  //cell1.innerHTML = tbRows+1;
  cell2.innerHTML = email.toLowerCase();
  cell3.innerHTML = '<span class="delX" onclick="deleteRow(this)">&times</span>';

  document.getElementById("addEmail").value = "";
}

function deleteRow(r) {
  var table = document.getElementById("tableEmail");
  var tableBody = table.getElementsByTagName("tbody").item(0);
  var i = r.parentNode.parentNode.rowIndex;
  tableBody.deleteRow(i - 1);
}

function clearSchedule() {
  document.getElementById("inputMeetName").value = "";
  document.getElementById("inputMeetDesc").value = "";
  document.getElementById("inputMeetDate").value = "";
  document.getElementById("inputMeetTime").value = "";
  $("#tableEmail tbody tr").remove();
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function sendInvite() {
  var table = document.getElementById("tableEmail");
  var tableBody = table.getElementsByTagName("tbody").item(0);
  var strEmail = "";

  for (var r=0, n=tableBody.rows.length; r < n; r++){
    var p = r+1;
    strEmail = strEmail.concat("Participant " + p.toString() + " <" + tableBody.rows[r].cells[1].innerHTML + ">");
    if(p<n){
      strEmail = strEmail.concat(", ")
    }
  }
  console.log(strEmail);

  var email = require("email.js");
  var server = email.server.connect({
    user: "akmalzamel.fyputp.noreply",
    password: "password",
    host: "smtp.gmail.com",
    ssl: true
  });
  
  server.send({
    text: "Online Meeting Created",
    from: "MC App <akmalzamel.fyputp.noreply@gmail.com>",
    to: strEmail,
    subject: "Email created"
  }, function(err, message) {
    console.log(err || message);
  });
}
