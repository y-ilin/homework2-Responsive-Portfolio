// $(window).on("scroll", function(){
//     if($("body").scrollTop() === 500){
//       $(window).off("scroll");

//       console.log("scrolled!");
//       // Do some stuff here ..
//     }
// })

// setTimeout(function() {
//   console.log( $("body").scrollTop())
// }, 5000)


// Hover event over portfolio images
// $(".portfolioImg").on("mouseover", function() {
//   const hoverVidID = $(this).closest("a").attr("id");
//   const hoverVidSrc = `./assets/imgs/porfolioVid${hoverVidID}.mov`;
//   const hoverVid = $("<video autoplay loop class='hoverVid'>");
//   hoverVid.append(`<source src="./assets/imgs/portfolioVid1.mov" />`);
//   $(this).closest("a").append(hoverVid);
// });

//////////////////// Portfolio images ////////////////////
// Handle mouse enter event on portfolio images to show zoomed out screenshot
const handlerInPortfolio = function(event) {
  const currentSrc = $(event.currentTarget).attr("src");
  const newSrc = currentSrc.slice(0, -4) + "small.png";
  $(event.currentTarget).attr("src", newSrc);
}
// Handle mouse leave event on portfolio images to show zoomed in screenshot
const handlerOutPorfolio = function(event) {
  const currentSrc = $(event.currentTarget).attr("src");
  const newSrc = currentSrc.slice(0, -9) + ".png";
  $(event.currentTarget).attr("src", newSrc);
}
// Hover event on portfolio images
$(".portfolioImg").hover(handlerInPortfolio, handlerOutPorfolio);


/////////////////////// Phone icon ///////////////////////
// Handle mouse enter event on portfolio images to show zoomed out screenshot
const handlerInPhone = function(event) {
  // $(event.currentTarget).append("<p>0403828226</p>");
  // const phoneNum = document.querySelector("#phoneNumber");
  // console.log(phoneNum);
  // phoneNum.animate({ opacity: "100%" }, 1000);
  $("#phoneNumber").css({ opacity: "100%" });
}
// Handle mouse leave event on portfolio images to show zoomed in screenshot
const handlerOutPhone = function(event) {
  $("#phoneNumber").css({ opacity: "0%" });
}
// Hover event on phone icon in nav bar
$("#phoneIcon").hover(handlerInPhone, handlerOutPhone);
