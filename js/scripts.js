//B.L.
 var firstRoman = ["",'I', 'II', 'III', "IV", "V", "VI", "VII", "VIII", "IX" ];
 var secondRoman = ["",'X', 'XX', 'XXX', "XL", "L", "LX", "LXX", "VIII", "IX" ];
 var thirdRoman = ["",'C', 'CC', 'CCC', "CD", "D", "DC", "DCC", "DCCC", "CM" ];
 var fourthRoman = ["",'M', 'MM', 'MMM'];
var romanizeNum = function(numb) {
  if (isNaN(numb) || (numb >= 3999) || (numb < 0)) {
    alert("Please Enter A Valid Number");
    document.getElementById("form1").reset();
  } else {
    var numToString = numb.toString();

    if (numToString.length === 1) {
      var posZero = parseInt(numToString.charAt(0));
      var romanSetOne = numToString.replace(posZero, (firstRoman[posZero]));
      return romanSetOne;

    } else if (numToString.length === 2) {
      var posZero = parseInt(numToString.charAt(0));
      var posOne = parseInt(numToString.charAt(1));
      var romanSetTwo = numToString.replace(posZero, (secondRoman[posZero])).replace(posOne, (firstRoman[posOne]));
      return romanSetTwo;

    } else if (numToString.length === 3) {
      var posZero = parseInt(numToString.charAt(0));
      var posOne = parseInt(numToString.charAt(1));
      var posTwo = parseInt(numToString.charAt(2));
      var romanSetThree = numToString.replace(posZero, (thirdRoman[posZero])).replace(posOne, (secondRoman[posOne])).replace(posTwo, (firstRoman[posTwo]))
      return romanSetThree;
    } else {
      var posZero = parseInt(numToString.charAt(0));
      var posOne = parseInt(numToString.charAt(1));
      var posTwo = parseInt(numToString.charAt(2));
      var posThree = parseInt(numToString.charAt(3));
      var romanSetFour = numToString.replace(posZero, (fourthRoman[posZero])).replace(posOne, (thirdRoman[posOne])).replace(posTwo, (secondRoman[posTwo])).replace(posThree, (firstRoman[posThree]));
      return romanSetFour;
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
