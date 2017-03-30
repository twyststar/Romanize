//B.L.
var romanizeNum = function(numb) {
  if (isNaN(numb) || (numb >= 3999) || (numb < 0)) {
    console.log('not valid');
    document.getElementById("form1").reset();
  }
  console.log(numb);
};//romanize function




//U.I.
$(document).ready(function() {

$('form#form1').submit(function(event) {
  event.preventDefault();
  var userNum = Math.round(parseInt($('input#input').val()));
  var res = romanizeNum(userNum);

  $('h4#result').text(res);

});//prevent default button

});// document ready
