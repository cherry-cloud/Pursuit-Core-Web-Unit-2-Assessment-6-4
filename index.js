document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let movieInfo = document.querySelector(".movieInfo");
  let select = document.querySelector("#movieTitles");
  let options;
  let movies;
  let userSelected;

  const requestMovieInfo = async () => {
    try {
      movies = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      
      movieOption = movies.data
      
    } catch(error) {
      console.log(error)
    }
    
    const selectMovieOptions = async () => {
      
      for (let i = 0; i <= movieOption.length; i++) {
        options = document.createElement("option");
        options.innerText = movieOption[i].title;
        options.value = movieOption[i].title;
        
        select.appendChild(options)
        
      }

    }
    selectMovieOptions()
        


    document.addEventListener("input" , (event) => {
      if (event.target.id !== "movieTitles") return;
      userSelected = event.target.value;
      movieInfo.innerHTML = "";
      for (let i = 0; i <= movieOption.length; i++) {
        if (movieOption[i].title === userSelected) {
          let title = document.createElement("h3");
          let movieYear = document.createElement("p");
          let movieSynop = document.createElement("p");

          title.innerHTML = movieOption[i].title;
          movieYear.innerHTML = movieOption[i].release_date;
          movieSynop.innerHTML = movieOption[i].description;

          movieInfo.appendChild(title);
          movieInfo.appendChild(movieYear);
          movieInfo.appendChild(movieSynop);
          
        }
        
      }
    }, false)
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let userReviewList = document.createElement("li");
      let userReviews = document.querySelector(".userReviews");
      let reviewMovieTextInput = document.querySelector("#reviewMovie");
      userReviewList.innerHTML = `${userSelected.bold()} ${"Review :".bold()} ${reviewMovieTextInput.value}`;
      userReviews.appendChild(userReviewList);
      reviewMovieTextInput.value = ""
  })
      // movieDescription();
  }


  requestMovieInfo();


})
