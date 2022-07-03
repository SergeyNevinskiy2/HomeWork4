'use strict';

const userChoice = prompt('What are we doing add? sub? mult? div?');
const userNum = +prompt('Enter the first number');
const userNum2 = +prompt('Enter the second number');

if (userChoice === 'add') {
   const result = userNum + userNum2;
   alert(`${userNum}+${userNum2}=${result}`);
}

else if (userChoice === 'sub') {
   const result = userNum - userNum2;
   alert(`${userNum}-${userNum2}=${result}`);
}

else if (userChoice === 'mult') {
   const result = userNum * userNum2;
   alert(`${userNum}*${userNum2}=${result}`);
}

else if (userChoice === 'div') {
   const result = userNum / userNum2;
   alert(`${userNum}/${userNum2}=${result}`);
}

else {
   alert('Error try again');
}

