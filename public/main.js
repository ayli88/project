import slider from "./js/slider.js";
import catagory from "./js/movies.js";
import recently from "./js/recently.js";
import cool from "./js/cool.js";


function initSlider() {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
}

async function allData(){
  await slider();
  await catagory();
  await recently();
  await cool();
  initSlider();

}
allData();