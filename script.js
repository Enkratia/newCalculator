const disp = document.querySelector("#disp");
var btn = document.querySelector(".vequ");


function val(result) {
  disp.value = disp.value + result;
}

function calculate() {
  if (disp.value === "") {
    alert("Please enter numbers");
  } else {
    disp.value = eval(disp.value);
  }
}

btn.addEventListener("dblclick", () => {
  disp.value = "";
})
