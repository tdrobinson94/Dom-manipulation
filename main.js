var add = function(e){
  e.preventDefault();
  var valueOne = document.getElementById('value-one').value;
  console.log("Value 1 is " + (valueOne));
  var valueTwo = document.getElementById('value-two').value;
  console.log("Value 2 is " + (valueTwo));
  var total = Number(valueOne) + Number(valueTwo);
  console.log("Total is " + total);
  var answer = document.getElementById('answer');
  answer.textContent = total;


  // var answer = document.querySelector('#answer');
  // answer.textContent = total;

};

var button = document.getElementById('calculate-button');
button.addEventListener('click', add);
