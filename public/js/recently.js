
const recently = async () => {
    try {
      let recently = document.querySelector(".recently");
 
      recently.classList.add("recently");
      let data = await fetch("http://localhost:3000/recently");
      let res = await data.json();
      let options = res.map((elem) => {
        return ` <div class="picture">
          <div class="overlay"><h5>${elem.description}  </h5>
          <p>${elem.year} - ${elem.catagory}</p>
          </div>
          <img src=${elem.image} alt=${elem.alt}></div>`;
      });
      document
        .querySelector(".option")
        .insertAdjacentHTML("beforeend", options.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default recently;
 