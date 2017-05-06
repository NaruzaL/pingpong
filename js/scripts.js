//backend logic------------------------------------------

//pingpong will take the users number and create an array that starts at 1 and fill in up to the users number. Then it sends the created array through the filter functions to replace 3's, 5's and 15's with the corrisponding words and finally returns them in another empty array.
var filteredArray = [];

var pingpong = function(numbers){
  var numberArray = [];
  for (var i = 1; i <= numbers; i++){
  numberArray.push(i);
  }
  for (var i = 1; i <= numberArray.length; i++){
  if ((i % 3 === 0) && (i % 5 === 0)){
    filteredArray.push("ping-pong");
  }
    else if (i % 3 === 0){
      filteredArray.push("ping");
    }
    else if (i % 5 === 0){
      filteredArray.push("pong");
    }
      else {
      filteredArray.push(i);
      }
  }
  return filteredArray;
}

//UI logic--------------------------------------------------

$(document).ready(function(){
  $("#mainform").submit(function(event){
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    pingpong(numbers);
    $("#output").empty();
    filteredArray.forEach(function(i){
    $("#output").append("<li>" + i + " </li>");
    });
  });
});
