function toggleClass(element, className) {
  var classes = element.className.split(" ");
  var index = classes.indexOf(className);
  if (index === -1) {
    classes.push(className);
  } else {
    classes.splice(index, 1);
  }
  element.className = classes.join(" ");
}

var buttons = document.getElementsByClassName("buttons")[0];
var btn = document.querySelectorAll("span");
var value = document.getElementById("value");
var toggleBtn = document.getElementsByClassName("toggleBtn")[0];
var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = customEval(value.innerHTML);
    } else {
      if (this.innerHTML == "Clear") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}

function customEval(expression) {
  var operators = expression.match(/[-+*/]/g);
  if (operators) {
    var operands = expression.split(/[-+*/]/);
    var result = parseFloat(operands[0]);
    for (var i = 0; i < operators.length; i++) {
      var operand = parseFloat(operands[i + 1]);
      if (operators[i] == "+") {
        result += operand;
      } else if (operators[i] == "-") {
        result -= operand;
      } else if (operators[i] == "*") {
        result *= operand;
      } else if (operators[i] == "/") {
        result /= operand;
      }
    }
    return result;
  } else {
    return expression;
  }
}

toggleBtn.onclick = function () {
  toggleClass(body, "dark");
};
