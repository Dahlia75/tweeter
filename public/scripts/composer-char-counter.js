//document.addEventListener("textarea");

$('document').ready(function(event){
var $count = $('.counter');
var maxTxtLen = 140;
var remainChr = 0;
  $('#tweettext').keyup(function(e) {
    remainChr = maxTxtLen - $(this).val().length;
    if ($(this).val().length > maxTxtLen) {
      $count.css({ 'color': 'red'});
    } else {
      $count.css({ 'color': '#000000'});
    }
    $count.text(remainChr);
  });
});

