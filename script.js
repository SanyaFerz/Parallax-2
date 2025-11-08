let userInput;
let userLimit;

do {
  userInput = prompt("Enter a number, or '0' to exit");
  userLimit = parseFloat(userInput);
  
  if(userLimit === 0){
    alert("Goodbye!");
    break;
  }
  if (!isNaN(userLimit)) {
    const finalNumbers = [];

    for (let i = 1; i <= userLimit; i++) {
      if (i % 5 === 0) {
        finalNumbers.push(i);
      }
    }

    if (finalNumbers.length === 0 & userLimit !== 0) {
      alert('Sorry, no numbers');
    } else {
      alert(`Your numbers are: ${finalNumbers.join(', ')}`);
    }
  } else {
    alert("Not a number! Reload and try again.");
  }

} while (!Number.isInteger(userLimit));
