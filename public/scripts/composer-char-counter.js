/* Calculate the number of input characters */

$('document').ready(function(event){
  var $count = $('.counter');
  var maxTxtLen = 140;
  var remainChr = 0;

  // Check the length of the enetered text with key press
  $('#tweettext').keyup(function(ev) {
    remainChr = maxTxtLen - $(this).val().length;
    if ($(this).val().length > maxTxtLen) {
      $count.css({ 'color': 'red'});
    } else {
      $count.css({ 'color': '#000000'});
    }
    $count.text(remainChr);
  });
});