//B.L.
var integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 var firstRoman = ["",'I', 'II', 'III', "IV", "V", "VI", "VII", "VIII", "IX" ]

var romanizeNum = function(numb) {
  if (isNaN(numb) || (numb >= 3999) || (numb < 0)) {
    document.getElementById("form1").reset();
  } else {
    var numToString = numb.toString();

    if (numToString.length === 1) {
      var posZero = parseInt(numToString.charAt(0));
      var roman = numToString.replace(posZero, (firstRoman[posZero]));
      console.log(roman);


    } else if (numToString.length === 2) {

    } else if (numToString.length === 3) {

    } else {

    }
  }
};//romanize function




//U.I.
$(document).ready(function() {

$('form#form1').submit(function(event) {
  event.preventDefault();
  // var userNum = [];
  var userNum = Math.round(parseInt($('input#input').val()));
  // var userNum = userNum.join();
  var res = romanizeNum(userNum);

  $('h4#result').text(res);

});//prevent default button

});// document ready
