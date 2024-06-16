function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const menu = async () => {
  try {
    let slide = document.querySelector(".menue");
    slide.classList.add("swiper-slide");
    let data = await fetch("http://localhost:3000/menu");
    let res = await data.json();
    let menu = res.map((elem) => {
      return `<div class="swiper-slide"><img src=${elem.image} alt=${elem.alt}/></div>`;
    });
    document
      .querySelector(".swiper-wrapper")
      .insertAdjacentElement("beforeend", slider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};

export default menu;
