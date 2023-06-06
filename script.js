let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
        if (isNaN(string)) {
          throw new Error("Invalid expression!");
        }
      }
      catch (error) {
        document.querySelector('input').value = "😵 ERROR!!!";
        throw new Error("Invalid expression or calculation error.");
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '^') {
      string += "**";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
window.addEventListener('load', function() {
  var divs = document.getElementsByClassName('colorful-div');
  var colors = ['#9AE3B7', '#F2EAC4', '#EAB0E3', '#95DBDA', "#9BAADD", "#E8F3D6", "#FFD4B2", "#AEE2FF", "#FFCEFE", "#ACBCFF", "#FDCEDF", "#E3F2C1", "#FEA1A1", "#FEFF86"];

  for (var i = 0; i < divs.length; i++) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    divs[i].style.backgroundColor = colors[randomIndex];
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.getElementById('myInput');

  inputElement.addEventListener('keydown', function(event) {
    var keyPressed = event.key;

    // Check if the pressed key is 'Enter'
    if (keyPressed == 'Enter') {
      console.log('Enter key pressed!');
      try {
        string = document.querySelector('input').value
        string = eval(string);
        document.querySelector('input').value = string;
        if (isNaN(string)) {
          throw new Error("Invalid expression!");
        }
      }
      catch (error) {
        document.querySelector('input').value = "😵 ERROR!!!";
        throw new Error("Invalid expression or calculation error.");
      }
    }
  });
});