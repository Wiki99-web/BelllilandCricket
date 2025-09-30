let isOn = false;
const divElement = document.querySelector("div");
const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
  if (isOn) {
    button.innerText = "OFF"
    divElement.classList.add("blue");
    divElement.classList.remove("red");
  } else {
    button.innerText = "ON"
    divElement.classList.add("red");
    divElement.classList.remove("blue");
  }
  
  isOn = !isOn; // Toggle state
});
