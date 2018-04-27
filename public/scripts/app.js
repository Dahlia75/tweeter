/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//var moment = require('moment');

$('document').ready(function(ev){
  // function escape(str) {
  //   var div = document.createElement('div');
  //   div.appendChild(document.createTextNode(str));
  //   console.log(div.innerHTML);
  //   return div.innerHTML;
  // }
  $("form").on("submit", function(event) {
    event.preventDefault();
    var $tweetTxt = $('#tweettext').val();
    var inputTweet =  $( this ).serialize();
    //var $tweetTxt = `${escape(inputTweet)}`;
    console.log("escaped: ", $tweetTxt);
    if ($tweetTxt === "" ){
      console.log("null");
      alert("Please enter the tweet.");
    } else{
      if ($tweetTxt.length > 140){
        alert("The text for the tweet need to be less than 140 letters.");
      } else{
        $.ajax({
          type: "POST",
          url: '/tweets/',
          data: inputTweet,
          success: getTweets
        });
        $('#tweettext').val("");
      }
    }
  });

  function createTweetElement(tweetData){
    var timeP = moment.unix(tweetData.created_at / 1000).fromNow();
    console.log("time", timeP);
    var $tweet = $('<article class="tweet"><header><img class="tweet-logo" src='+
    tweetData.user.avatars.small +'><h2 class="my-name">' + tweetData.user.name +
    '</h2><span class="handle">' + tweetData.user.handle + '</span></header><p>' +
    tweetData.content.text + '</p><footer><span class="date">' + timeP +
    '</span><i class=" tweet-action fas fa-heart"></i><i class=" tweet-action fas fa-retweet"></i><i class=" tweet-action fas fa-flag"></i></footer></article>');
    return $tweet;
  }

  function renderTweets(tweets) {
    $('#tweets_container').empty(); //to remove the displayed tweets and prevent the dublication
    tweets.reverse().forEach(function(tweet){
      var $tweet = createTweetElement(tweet);
      $('#tweets_container').append($tweet);
    });
  }

  function getTweets(){
    $.ajax({
      url: '/tweets/',
      success: function(tweets){
        renderTweets(tweets);
      }
    });
  }

  getTweets();
});
