let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2.7];
let operations = ["+", "-", "*", "/"];

function operations_result(number_1, number_2, operation) {
  if (operation == "+") {
    return number_1 + number_2;
  } else if (operation == "-") {
    return number_1 - number_2;
  } else if (operation == "*") {
    return number_1 * number_2;
  } else if (operation == "/") {
    return number_1 / number_2;
  }
}
const work_area = document.querySelector("#Calculations");
const number_buttons = document.querySelectorAll(".number");
const operation_buttons = document.querySelectorAll(".operations");
const equal_button = document.querySelector("#equalto");
const ac = document.querySelector("#AllClear");

// console.log(number_buttons);
let number_1 = 0;
let number_2 = 0;
let count = 0;
let operation = "";
let previous_operation = "";
let not_the_first = 0;

for (let i = 0; i < number_buttons.length; i++) {
  number_buttons[i].onclick = () => {
    //Understand This Functionality Very Very Thoroughly!!
    if (not_the_first != 0 && count == 0) {
      work_area.innerText = "";
      number_1 = 0;
      not_the_first = 0;
    }

    work_area.innerText += numbers[i];

    if (count == 0) {
      number_1 = number_1 * 10 + numbers[i];
    } else {
      number_2 = number_2 * 10 + numbers[i];
    }
  };
}

for (let i = 0; i < operation_buttons.length; i++) {
  operation_buttons[i].onclick = () => {
    work_area.innerText += " " + operations[i] + " ";
    previous_operation = operation;
    operation = operations[i];
    count++;
    if (count >= 2) {
      number_1 = operations_result(number_1, number_2, previous_operation);
      work_area.innerText = `${number_1} ${operation} `;
      number_2 = 0;
    }
  };
}

//Equal To Button Functionality
equal_button.onclick = () => {
  number_1 = operations_result(number_1, number_2, operation);
  work_area.innerText = number_1;
  count = 0;
  number_2 = 0;
  not_the_first++;
};

//All Clear Button Functionality!
ac.onclick = () => {
  location.reload();
};
