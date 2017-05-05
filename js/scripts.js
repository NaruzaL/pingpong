//backend logic------------------------------------------

//pingpong will take the users number and create an array that starts at 1 and fill in up to the users number. Then it sends the array through the filter function to replace 3's, 5's and 15's with the corrisponding words and finally returns them in another empty array.
debugger;
var displayArray = [];
var numberArray = [];
var pingpong = function(numbers, i){
  for (var i = 1; i <= numbers; i++){
  numberArray.push(i);
  console.log(numberArray);
  filter(numberArray[i]);
  displayArray.push(result);
  }
  return displayArray;
}

var filter = function(numberArray){
  var result = []
  for (i = 1; i < numberArray.length; i++){
  if (filter3(numberArray) === 0 && filter5 === 0){
    numberArray.slice(numberArray[i]);
    numberArray.push("ping-pong");
  }
    else if (filter3(numberArray) === 0){
      numberArray.slice(numberArray[i]);
      numberArray.push("ping");
    }
    else if (filter5(numberArray) === 0){
      numberArray.slice(numberArray[i]);
      filteredArray.push("pong");
    }
  }
  return result;
}

var filter3 = function (numberArray, i){
  var check = (numberArray[i] % 3);
}
var filter5 = function (numberArray, i){
  var check = (numberArray[i] % 5);
}
//UI logic--------------------------------------------------

$(document).ready(function(){
  $("#mainform").submit(function(event){
  var numbers = parseInt($("input#number").val());
  var result = pingpong(numbers);
  for (i = 0; i <= displayArray.length; i++){
  $("#output").append("<li>" + displayArray[i] + " </li>");
  }
  event.preventDefault();
  });
});
