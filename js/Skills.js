document.getElementById("main-form").addEventListener("submit", checkIn);

function checkIn(event) {
  event.preventDefault();
  var el = document.getElementById("main-form");
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;
  var er = "";
  if (name == "" || pass == "" || repass == "" || state == "")
    er = "Необходимо заполнить все поля*";
  else if (name.length <= 1 || name.length > 25) er = "Введите карректное имя*";
  else if (pass != repass) er = "Пароли не совпадают*";
  else if (name == pass) er = "Имя и пароль не могут быть одинаковыми*";

  if (er != "") {
    document.getElementById("ER").innerHTML = er;
  } else {
    alert("Данные заполнены корректно");
    el.name.value = "";
    el.pass.value = "";
    el.repass.value = "";
    state.value = null;
    document.getElementById("ER").innerHTML = null;

    return true;
  }
}

function myBoxAnim() {
  var pos = 0;
  var box = document.getElementById("boxAnim");
  var id = setInterval(frame, 22);
  function frame() {
    if (pos == 26) {
      box.style.top = 0;
      box.style.left = 0;
      clearInterval(id);
    } else {
      pos++;
      box.style.top = pos + "em";
      box.style.left = pos + "em";
    }
  }
}
