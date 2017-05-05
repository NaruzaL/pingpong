//backend logic------------------------------------------

//pingpong will take the users number and create an array that starts at 1 and fill in up to the users number. Then it sends the created array through the filter functions to replace 3's, 5's and 15's with the corrisponding words and finally returns them in another empty array.
debugger;
var filteredArray = [];

var pingpong = function(numbers, i){
  var numberArray = [];
  for (var i = 1; i <= numbers; i++){
  numberArray.push(i);
  }
  console.log(numberArray);
  for (var i = 0; i < numberArray.length; i++){
  if (filter3(numberArray, i) === 0 && filter5(numberArray, i) === 0){
    filteredArray.push("ping-pong");
  }
    else if (filter3(numberArray, i) === 0){
      filteredArray.push("ping");
    }
    else if (filter5(numberArray, i) === 0){
      filteredArray.push("pong");
    }
    else {
    filteredArray.push(i);
    }
  }
  return numberArray;
}

function filter3 (numberArray, i){
  var check = (numberArray[i] % 3);
}
function filter5 (numberArray, i){
  var check = (numberArray[i] % 5);
}
//UI logic--------------------------------------------------

$(document).ready(function(){
  $("#mainform").submit(function(event){
  var numbers = parseInt($("input#number").val());
  var result = pingpong(numbers);
  for (i = 0; i <= filteredArray.length; i++){
  $("#output").append("<li>" + filteredArray[i] + " </li>");
  }
  event.preventDefault();
  });
});
