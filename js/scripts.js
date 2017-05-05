//backend logic

//countingArray will count from 1 to the number selected by the user and fill the array with those numbers.
var countingArray =
  for (var i = 1; i < number; i++){
    countingArray.push(i);
  }

// catch3 will be used to scan each i in the countingArray and see if it's exactly divisable by three. catch5 will do the same for 5's, catch15 for 15's.
function catch3(countingArray, i){
  var temp = (array[i] % 3)
  return temp;
}
function catch5(countingArray, i){
  var temp = (array[i] % 5)
  return temp;
}
function catch15(countingArray, i){
  var temp = (array[i] % 15)
  return temp;
}





//UI logic

$(document).ready(function(){
  $("#mainform").submit(function(event){
  var number = parseInt($("input#number").val());
event.preventDefault();
  });
});
