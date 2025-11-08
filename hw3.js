document.getElementById("runScript-hw3").addEventListener("click", () =>{
    let firstInput = prompt("Enter First number");
    let secondInput = prompt("Enter Second number");

    let firstNumber = parseFloat(firstInput);
    let secondNumber = parseFloat(secondInput);

    while(isNaN(firstInput) || isNaN(secondInput)){
        alert("Error: enter a number, not a text");

        firstInput = prompt("Enter First number");
        secondInput = prompt("Enter Second number");

        firstNumber = parseFloat(firstInput);
        secondNumber = parseFloat(secondInput);
    }

    let userOperator = prompt("Which operation are we doing?");
    let result;

    switch(userOperator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber === 0){
                alert('Error: Division by zero');
                break;
            }else{
                result = firstNumber / secondNumber;
                break;
            }
            default:
                result = 'Invalid Operator';
    }

    alert(`${firstNumber} ${userOperator} ${secondNumber} = ${result}`);

});