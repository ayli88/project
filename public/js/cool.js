
const cool = async () => {
    try {
      let recently = document.querySelector(".cool");
 
      recently.classList.add("cool");
      let data = await fetch("http://localhost:3000/cool");
      let res = await data.json();
      let cooll = res.map((elem) => {
        return ` <div class="picture">
          <div class="overlay"><h5>${elem.description}  </h5>
          <p>${elem.year} - ${elem.catagory}</p>
          </div>
          <img src=${elem.image} alt=${elem.alt}></div>`;
      });
      document
        .querySelector(".cool-movie")
        .insertAdjacentHTML("beforeend", cooll.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default cool;