//variables
chars = [];


//logic

function Calculate(Num, Operator, Num2) {
  console.log(Num, Operator, Num2);
  if (Operator == "+") {
    result = Num + Num2;
    screen.value = result;
  } else if (Operator == "/") {
    result = Num / Num2;
    screen.value = result;
  } else if (Operator == "-") {
    result = Num - Num2;
    screen.value = result;
  } else if (Operator == "*") {
    result = Num * Num2;
    screen.value = result;
  } else if (Operator == "!") {
    for (let i = 1; Num > i; i++) {
      fact = Num;
      for (let i = 1; Num > i; i++) {
        fact = fact * i;
      }
      result = fact;
      screen.value = result;
    }
  } else if (Operator == "^") {
    result = Math.pow(Num, Num2);
  }
  lastResult.textContent = `Ans = ${result}`;
}

//keypads onclick + logic

const screen = document.querySelector(".inputNum");

const lastResult = document.querySelector(".lastResult");

const buttonOne = document.querySelector(".one");
buttonOne.addEventListener("click", function () {
  screen.value += "1";
  chars.push("1")
  console.log(chars)

});

const buttonTwo = document.querySelector(".two");
buttonTwo.addEventListener("click", function () {
  screen.value += "2";
  chars.push("2")
  console.log(chars)
});

const buttonThree = document.querySelector(".three");
buttonThree.addEventListener("click", function () {
  screen.value += "3";
  chars.push("3")
  console.log(chars)
});

const buttonFour = document.querySelector(".four");
buttonFour.addEventListener("click", function () {
  screen.value += "4";
  chars.push("4")
  console.log(chars)
});

const buttonFive = document.querySelector(".five");
buttonFive.addEventListener("click", function () {
  screen.value += "5";
  chars.push("5")
  console.log(chars)
});

const buttonSix = document.querySelector(".six");
buttonSix.addEventListener("click", function () {
  screen.value += "6";
  chars.push("6")
  console.log(chars)
});

const buttonSeven = document.querySelector(".seven");
buttonSeven.addEventListener("click", function () {
  screen.value += "7";
  chars.push("7")
  console.log(chars)
});

const buttonEight = document.querySelector(".eight");
buttonEight.addEventListener("click", function () {
  screen.value += "8";
  chars.push("8")
  console.log(chars)
});

const buttonNine = document.querySelector(".nine");
buttonNine.addEventListener("click", function () {
  screen.value += "9";
  chars.push("9")
  console.log(chars)
});

const buttonZero = document.querySelector(".zero");
buttonZero.addEventListener("click", function () {
  screen.value += "0";
  chars.push("0")
  console.log(chars)
});

const buttonAns = document.querySelector(".ans");
buttonAns.addEventListener("click", function () {
  screen.value = lastResult;
  chars.push(lastResult)
});

const buttonPower = document.querySelector(".power");
buttonPower.addEventListener("click", function () {
  screen.value += "^";
  chars.push("0")
});

const buttonFactorial = document.querySelector(".factorial");
buttonFactorial.addEventListener("click", function () {
  screen.value += "!";
  chars.push("0")
});

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", function () {
  chars.pop();

});

const buttonAllClear = document.querySelector(".allclear");
buttonAllClear.addEventListener("click", function () {
  screen.value = "";
  buttonAllClear.addEventListener("click", function () {
    lastResult.textContent = ``;
  });
});

const buttonDivide = document.querySelector(".divide");
buttonDivide.addEventListener("click", function () {
  screen.value += "/";
});

const Multiply = document.querySelector(".multiply");
Multiply.addEventListener("click", function () {
  screen.value += "*";
  
});

const buttonEqual = document.querySelector(".equal");
buttonEqual.addEventListener("click", function () {
  screen.value = Calculate(5, "^", 3);
});

const buttonSum = document.querySelector(".sum");
buttonSum.addEventListener("click", function () {
  screen.value += "+";
});

const buttonSubstract = document.querySelector(".substract");
buttonSubstract.addEventListener("click", function () {
  screen.value += "-";
});

//keypads obclick = color
const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", function changeColor() {
    element.style.transform = "translateY(2px)";
    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 200);
  });
});

buttons.forEach((element) => {
  element.addEventListener("mouseover", function changeColor() {
    element.style.background =
      "linear-gradient(to top, #ffffff 0%, #8f4646 115%)";
  });
});
buttons.forEach((element) => {
  element.addEventListener("mouseout", function changeColor() {
    element.style.background = "white";
    element.style.transform = "scale(1)";
  });
});

buttonEqual.addEventListener("mouseout", function changeColor() {
  buttonEqual.style.background =
    "linear-gradient(to top, #ffffff 0%, #8f4646 115%)";
});


