$(window).on("scroll", function(){
    if($("body").scrollTop() === 50){
      $(window).off("scroll");

      console.log("scrolled!");
      // Do some stuff here ..
    }
})

