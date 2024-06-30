



const catagory = async () => {
    try {
      let movie = document.querySelector(".catagory");
 
      movie.classList.add("movie");
      let data = await fetch("http://localhost:3000/movies");
      let res = await data.json();
      let movies = res.map((elem) => {
        return ` <div class="picture">
          <div class="overlay"><h5>${elem.description}  </h5>
          <p>${elem.year} - ${elem.catagory}</p>
          
          </div>
          <img src=${elem.image} alt=${elem.alt}></div>`;
      });
      document
        .querySelector(".movies")
        .insertAdjacentHTML("beforeend", movies.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default catagory;
 