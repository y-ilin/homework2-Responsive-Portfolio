$(document).ready(function() {       

    let scroll_pos = 0;

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();

        // When scrolling from intro to portfolio, dynamically change..
        if(scroll_pos > 500) {
            $("#portfolioTitle").css("opacity", "100%")
            $("body").css("background-color", "rgb(80, 0, 255)");
            // $("body").css("background-color", "white");
            $("#navbar-brand").css("text-shadow", "2px 3px white");
            $("#navbar-brand").css("-webkit-text-stroke-color", "black");
            $(".fab, .fas").css("color", "white");
        } else if(scroll_pos > 300) {
            $("#navbar-brand").css("text-shadow", "2px 3px rgb(68, 0, 255)");
            $("#navbar-brand").css("-webkit-text-stroke-color", "rgb(68, 0, 255)");
            $(".fab, .fas").css("color", "rgb(68, 0, 255)");
            $(".navbar-nav, .nav-pages").css("color", "white")
            $(".navbar-nav .nav-item.nav-link.nav-pages.active").css("border-bottom", "1px solid white");
            $("body").css("background-color", "rgb(219, 214, 255)");
            // $("body").css("background-color", "white");

        } else if(scroll_pos > 100) {
            // $(".navbar, a").css("background-color", "rgba(255, 255, 255, 0)")
            // $("#introLargeText").css("opacity", "0%");
            // $("#introLargeText").css("transform", "translateY(30px)");
            $("#portfolioTitle").css("opacity", "0%")
            $(".marquee").css("opacity", "0%");
            $(".marquee").css("transform", "translateY(-20px)");
        } else {
            $("body").css("background-color", "rgb(219, 214, 255)");
            // $("body").css("background-color", "white");
            // $("#navbar-brand").css("text-shadow", "2px 2px rgb(68, 0, 255)");
            // $("#navbar-brand").css("-webkit-text-stroke-color", "rgb(68, 0, 255)");
            $("#navbar-brand").css("text-shadow", "2px 3px rgb(68, 0, 255)");
            $("#navbar-brand").css("-webkit-text-stroke-color", "rgb(68, 0, 255)");
            $(".fab, .fas").css("color", "rgb(68, 0, 255)");
            $(".navbar-nav, .nav-pages").css("color", "rgb(68, 0, 255)")
            // $(".navbar, a").css("background-color", "rgba(255, 255, 255, 0.95)")
            $(".navbar-nav .nav-item.nav-link.nav-pages.active").css("border-bottom", "1px solid rgb(68, 0, 255)");
            $("#introLargeText").css("opacity", "100%");
            $("#introLargeText").css("transform", "translateY(0px)");
            $(".marquee").css("opacity", "100%");
            $(".marquee").css("transform", "translateY(0px)");
            $("#portfolioTitle").css("opacity", "0%")
        }

    });
})