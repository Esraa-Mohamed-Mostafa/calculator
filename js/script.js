let buttons = document.getElementsByTagName('button');
let input = document.getElementById("input");
let regexp = "[^0-9]";
let isActive = true;


function display(number) {
  if (!isActive) {
    input.value = "";
    isActive = true;
  }

  input.value = input.value + number;

  if (isNaN(input.value.slice(-1)) && isNaN(input.value.slice(-2, -1))) {
    input.value = input.value.replace(input.value.slice(-2), number)
  };

  if (input.value.slice(0, 1).match(regexp)) { input.value = input.value.replace(input.value.slice(0, 1), "") };

}

function slice() {
  input.value = input.value.slice("", -1)
}

function empty() {
  input.value = input.value.replace(input.value, "");
}


// btn.addEventListener('click', equal);

function equal(event) {
  var clickedButtonValue = event.target.innerText;
  if (clickedButtonValue === '=' && input.value !== "") {
    input.value = eval(input.value); isActive = false;
  }
  else { input.value = ""; }
}

function callMirna(event) {
  console.log(event.target.innerText)
}

input.addEventListener('keydown', keyboardNum)
function keyboardNum(event) {
  console.log(event);
  if (!isActive) {
    input.value = "";
    isActive = true;
  }


  array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "-", '+', ".", "(", ")"];

  if (array.includes(event.key)) {
    console.log("test")
    input.value = input.value + event.key
  }


  if (event.key == "Backspace") {
    input.value = input.value.slice("", -1);
  }

  if (event.key == "Enter") {
    input.value = eval(input.value);
    isActive = false;
  }

  if (isNaN(input.value.slice(-1)) && isNaN(input.value.slice(-2, -1))) {
    input.value = input.value.replace(input.value.slice(-2), event.key)
  };
  if (input.value.slice(0, 1).match(regexp)) { input.value = input.value.replace(input.value.slice(0, 1), "") };
}



  // if (event.key == "1") { keyboardInput.value = keyboardInput.value + event.key }
//let keyboardInput = document.getElementById('keyboard-input');


//function equal() {
//if (input.value != "") {
 //   input.value = eval(input.value);
 // } else {input.value = "" }

