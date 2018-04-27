$( "#tweets_container" )

$(document).ready(function () {
    var $hover = $("#tweets_container");
    $("#tweets_container").hover(function () {
        $home.removeClass("hoverEffectSelect");
        $(this).addClass("hoverEffectSelect");
    },function () {
        $(this).removeClass("hoverEffectSelect");
        $home.addClass("hoverEffectSelect");
    });
});