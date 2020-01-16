$(document).ready(function(){

    onload();

    var currentHeight=$(this).scrollTop();
    if(currentHeight >= 400) {
        $('.moveTo90, .moveTo80, .moveTo75, .moveTo70, .moveTo65, .moveTo60, .moveTo50').css("animation-play-state", "running");
        $('.backToTop').css('opacity', '100%');
    }

    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        if(scroll >= 400) {
            $('.moveTo90, .moveTo80, .moveTo75, .moveTo70, .moveTo65, .moveTo60, .moveTo50').css("animation-play-state", "running");
            $('.backToTop').css('opacity', '100%');
        } else {
            $('.backToTop').css('opacity', '0%');
        }
    });

//     $(window).resize(function(){
//         var w = window.innerWidth;
// var h = window.innerHeight;
// var ow = window.outerWidth; //including toolbars and status bar etc.
// var oh = window.outerHeight;
//         console.log(w)
//         if(w > 600){
//             $('#text').removeClass('moveRight');
//         }
//     })

    function onload(){

        /*
        ** Type writer for self introduction.
        */

        var i = 0;
        var txt = 'Hi, my name is Regina!';
        var speed = 100;
        var done = false;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("greeting").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                done = true;
            }
        }

        typeWriter();
    }

});