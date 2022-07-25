var data = new Date();
var textData = document.getElementById("dateTimeText");

setInterval(dateTime, 1);
function dateTime() {
  var u = data.getMonth() + 1;
  textData.innerHTML = data.getDate() + ":" + u + ":" + data.getFullYear();
}
