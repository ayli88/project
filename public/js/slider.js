const slider = async () => {
  try {
    // let slide = document.querySelector(".swiper-slide");

    // slide.classList.add("swiper-slide");
    let data = await fetch("http://localhost:3000/slider-desktop");
    let res = await data.json();
    let slider = res.map((elem) => {
      return `<div class="swiper-slide"><img src=${elem.image} alt=${elem.alt}/></div>`;
    });
    document
      .querySelector(".swiper-wrapper")
      .insertAdjacentHTML("beforeend", slider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};

export default slider;
