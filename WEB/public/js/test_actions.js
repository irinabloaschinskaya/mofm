var a = document.getElementById("AButton");
var b = document.getElementById("BButton");
var c = document.getElementById("CButton");
var d = document.getElementById("DButton");

function clicked(button) {
  switch (button) {
    case "A":
      a.checked = true;
      b.checked = false;
      c.checked = false;
      d.checked = false;
      break;
    case "B":
      b.checked = true;
      a.checked = false;
      c.checked = false;
      d.checked = false;
      break;
    case "C":
      c.checked = true;
      b.checked = false;
      a.checked = false;
      d.checked = false;
      break;
    case "D":
      d.checked = true;
      b.checked = false;
      c.checked = false;
      a.checked = false;
      break;
    default:

  }
}
