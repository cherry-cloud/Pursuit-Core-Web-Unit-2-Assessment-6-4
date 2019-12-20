document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let reviewMovieTextInput = document.querySelector("#reviewMovie");
  let userReviews = document.querySelector(".userReviews")
  let submitBtn = document.querySelector("#submitBtn");
  let userSubmitReview = document.querySelector("ul");
  let movieInfo = document.querySelector(".movieInfo");
  let select = document.querySelector("#movieTitles")

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      let userReviewList = document.createElement("li");
      userReviewList.innerText = reviewMovieTextInput.value;
      userReviews.appendChild(userReviewList);
      reviewMovieTextInput.value = ""
  })
  
  const requestMovieInfo = async () => {
    try {
      let movies = await axios.get(`https://ghibliapi.herokuapp.com/films`)

      movieOption = movies.data
      
      
    }catch(error) {
      console.log(error)
    }
    
      const selectMovieOptions = async () => {
        for (let i = 0; i <= movieOption.length; i++) {
          let options = document.createElement("option");
          options.innerText = movieOption[i].title;
          options.value = movieOption[i].title;
          select.appendChild(options)
        }
      }
      selectMovieOptions()

      const movieDescription = () => {

        for (let i = 0; i <= movieOption.length; i++) {
          let title = document.createElement("h3");
          let movieYear = document.createElement("p");
          let movieSynop = document.createElement("p");
          title.innerText = movieOption[i].title;
          movieYear.innerText = movieOption[i].release_date;
          movieSynop.innerText = movieOption[i].description;
          // debugger;
          movieInfo.appendChild(title);
          movieInfo.appendChild(movieYear);
          movieInfo.appendChild(movieSynop);
        }
      }
      movieDescription();
  }


  requestMovieInfo();


})