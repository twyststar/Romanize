//B.L.
var romanizeNum = function(numb) {
  if (isNaN(numb)) {
    console.log('worked');
  }
  console.log(numb);
};//romanize function




//U.I.
$(document).ready(function() {

$('form#form1').submit(function(event) {
  event.preventDefault();
  var userNum = parseInt($('input#input').val());
  var res = romanizeNum(userNum);

  $('h4#result').text(res);

});//prevent default button

});// document ready
