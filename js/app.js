const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator (+ , - , / , *)');


let answer;

if (isNaN(number1) || isNaN(number2)) {
    alert('Wrong input!!! Refresh the page and input a correct data');
} else {
    if(operator == '+') {
        answer = number1 + number2;
    } else if (operator == '-') {
        answer = number1 - number2;
    } else if (operator == '/') {
        answer = number1 / number2;
    } else if (operator == '*') {
        answer = number1 * number2;
    } document.write(number1 + operator + number2 + ' = ' + answer);
}