$('document').ready(function(ev){
  $('#compose-id').click(function(event) {
    $( "section.new-tweet" ).toggle();
    $( "#tweettext" ).focus();
  });
});
