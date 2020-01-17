$(document).ready(function(){

    onload();

    var currentHeight=$(this).scrollTop();
    if(currentHeight >= 400) {
        $('.moveTo90, .moveTo80, .moveTo75, .moveTo70, .moveTo65, .moveTo60, .moveTo50').css("animation-play-state", "running");
    }
    
    var width = window.innerWidth;
    if(width < 600){
        // $('#text').removeClass('moveRight');
        // $('#text').next().removeClass('moveLeft');    
    }

    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        if(scroll >= 400) {
            $('.moveTo90, .moveTo80, .moveTo75, .moveTo70, .moveTo65, .moveTo60, .moveTo50').css("animation-play-state", "running");
            $('.backToTop').css('opacity', '1');
            $('.backToTop').css('display', 'block');
        } else {
            $('.backToTop').css('opacity', '0');
            $('.backToTop').css('display', 'none');
        }
    });

    $(window).resize(function(){
        var w = window.innerWidth;
        console.log(w)
        if(w < 600){
            $('#text').removeClass('moveRight');
            $('#text').next().removeClass('moveLeft');
        } else {
            $('#text').addClass('moveRight');
            $('#text').next().addClass('moveLeft');
        }
    })

    var p1 = document.getElementById("portfolio1");
    var btn1 = document.getElementById("open-portfolio1");
    var close1 = document.getElementById("close-portfolio1");

    btn1.onclick = function() {
        p1.style.display = "block";
        p1.style.opacity = "1";
    }

    close1.onclick = function() {
        p1.style.display = "none";
        p1.style.opacity = "0";
    }

    window.onclick = function(event) {
        if (event.target == p1) {
            p1.style.display = "none";
            p1.style.opacity = "0";
        }
    }

    var p2 = document.getElementById("portfolio2");
    var btn2 = document.getElementById("open-portfolio2");
    var close2 = document.getElementById("close-portfolio2");

    btn2.onclick = function() {
        p2.style.display = "block";
        p2.style.opacity = "1";
    }

    close2.onclick = function() {
        p2.style.display = "none";
        p2.style.opacity = "0";
    }

    window.onclick = function(event) {
        if (event.target == p2) {
            p2.style.display = "none";
            p2.style.opacity = "0";
        }
    }

    var p3 = document.getElementById("portfolio3");
    var btn3 = document.getElementById("open-portfolio3");
    var close3 = document.getElementById("close-portfolio3");

    btn3.onclick = function() {
        p3.style.display = "block";
        p3.style.opacity = "1";
    }

    close3.onclick = function() {
        p3.style.display = "none";
        p3.style.opacity = "0";
    }

    window.onclick = function(event) {
        if (event.target == p3) {
            p3.style.display = "none";
            p3.style.opacity = "0";
        }
    }

    var p4 = document.getElementById("portfolio4");
    var btn4 = document.getElementById("open-portfolio4");
    var close4 = document.getElementById("close-portfolio4");

    btn4.onclick = function() {
        p4.style.display = "block";
        p4.style.opacity = "1";
    }

    close4.onclick = function() {
        p4.style.display = "none";
        p4.style.opacity = "0";
    }

    window.onclick = function(event) {
        if (event.target == p4) {
            p4.style.display = "none";
            p4.style.opacity = "0";
        }
    }

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