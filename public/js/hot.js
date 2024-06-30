
const hot = async () => {
    try {
      let recently = document.querySelector(".hot");
 
      recently.classList.add("hot");
      let data = await fetch("http://localhost:3000/hot");
      let res = await data.json();
      let hotMovie = res.map((elem) => {
        return ` <div class="picture">
          <div class="overlay"><h5>${elem.description}  </h5>
          <p>${elem.year} - ${elem.catagory}</p>
          </div>
          <img src=${elem.image} alt=${elem.alt}></div>`;
      });
      document
        .querySelector(".hot-movie")
        .insertAdjacentHTML("beforeend", hotMovie.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default hot;