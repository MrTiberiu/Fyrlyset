/*====================================================
                        SERVICES
====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});

/*====================================================
                        WORK
====================================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*====================================================
                        TEAM
====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});


/*====================================================
                        TESTIMONIALS
====================================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*====================================================
                        STATS
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

    /*====================================================
                            NAVIGATION
    ====================================================*/
// Show/Hide transparent black navigation
    $(function () {

        $(window).scroll(function () {

            if ($(this).scrollTop() < 50) {
                // hide nav
                $("nav").removeClass("vesco-top-nav");
                $("#back-to-top").fadeOut();

            } else {
                // show nav
                $("nav").addClass("vesco-top-nav");
                $("#back-to-top").fadeIn();
            }
        });
    });
// Smooth scrolling
    $(function () {

        $("a.smooth-scroll").click(function (event) {

            event.preventDefault();

            // get/return id like #about, #work, #team and etc
            var section = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(section).offset().top - 64
            }, 1250, "easeInOutExpo");
        });
    });

// Close mobile menu on click
    $(function () {

        $(".navbar-collapse ul li a").on("click touch", function () {

            $(".navbar-toggler").click();
        });
    });

/*====================================================
                        Videos
====================================================*/
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        events: {
            'onStateChange': onPlayerStateChange1
        }
    });
    player2 = new YT.Player('player2', {
        events: {
            'onStateChange': onPlayerStateChange2
        }
    });
    player3 = new YT.Player('player3', {
        events: {
            'onStateChange': onPlayerStateChange3
        }
    });

    player4 = new YT.Player('player4', {
        events: {
            'onStateChange': onPlayerStateChange4
        }
    });

    player5 = new YT.Player('player5', {
        events: {
            'onStateChange': onPlayerStateChange5
        }
    });

    player6 = new YT.Player('player6', {
        events: {
            'onStateChange': onPlayerStateChange6
        }
    });

    player7 = new YT.Player('player7', {
        events: {
            'onStateChange': onPlayerStateChange7
        }
    });

    player8 = new YT.Player('player8', {
        events: {
            'onStateChange': onPlayerStateChange8
        }
    });

    player9 = new YT.Player('player9', {
        events: {
            'onStateChange': onPlayerStateChange9
        }
    });

    player10 = new YT.Player('player10', {
        events: {
            'onStateChange': onPlayerStateChange10
        }
    });

    player11 = new YT.Player('player11', {
        events: {
            'onStateChange': onPlayerStateChange11
        }
    });

    player12 = new YT.Player('player12', {
        events: {
            'onStateChange': onPlayerStateChange12
        }
    });

    player13 = new YT.Player('player13', {
        events: {
            'onStateChange': onPlayerStateChange13
        }
    });

    player14 = new YT.Player('player14', {
        events: {
            'onStateChange': onPlayerStateChange14
        }
    });

    player15 = new YT.Player('player15', {
        events: {
            'onStateChange': onPlayerStateChange15
        }
    });

    player16 = new YT.Player('player16', {
        events: {
            'onStateChange': onPlayerStateChange16
        }
    });

}
onYouTubeIframeAPIReady();


function onPlayerStateChange1(event) {

    if (event.data === YT.PlayerState.PLAYING) {
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange2(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        player1.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange3(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange4(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange5(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange6(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange7(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange8(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange9(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange10(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange11(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange12(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange13(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange14(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player15.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange15(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player16.stopVideo();
    }
}
function onPlayerStateChange16(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
        player1.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        player9.stopVideo();
        player10.stopVideo();
        player11.stopVideo();
        player12.stopVideo();
        player13.stopVideo();
        player14.stopVideo();
        player15.stopVideo();
    }
}






















