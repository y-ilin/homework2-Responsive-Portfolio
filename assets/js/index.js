$(document).ready(function() {       

    let scroll_pos = 0;

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();

        // When scrolling from intro to portfolio, dynamically change..
        if(scroll_pos > 900){
            $("body").css("background-color", "rgb(68, 0, 255)");
        } else if(scroll_pos > 500) {
            // background color
            $("body").css("background-color", "rgb(111, 59, 255)");
            // and navbar colors
            $("#navbar-brand").css("text-shadow", "2px 3px black");
            $("#navbar-brand").css("-webkit-text-stroke-color", "black");
            $(".fab, .fas").css("color", "white");
            $(".navbar-nav, .nav-pages").css("color", "white")
        } else {
            $("body").css("background-color", "white");
            $("#navbar-brand").css("text-shadow", "2px 3px rgb(68, 0, 255)");
            $("#navbar-brand").css("-webkit-text-stroke-color", "rgb(68, 0, 255)");
            $(".fab, .fas").css("color", "rgb(68, 0, 255)");
            $(".navbar-nav, .nav-pages").css("color", "rgb(68, 0, 255)")
            $(".navbar-nav .nav-item.nav-link.nav-pages.active").css("border-bottom", "1px solid ");
        }

    });
})