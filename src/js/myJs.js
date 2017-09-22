import $ from 'jquery';

$(document).ready(function(){
    
setInterval(function(){
var windowWidth = $(window).width();
var moonWidth = 882;
if( moonWidth > windowWidth){
    $(".moon-container").css({
        left: (windowWidth-882)/2+"px",
    })
}

})


});