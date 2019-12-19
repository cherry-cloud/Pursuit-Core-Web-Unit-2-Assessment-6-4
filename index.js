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
    
      const selectMovieOptions = async () => {//Jon's Review
      // have to get to the movie array to then have for loop, loop through and displauy the movies as options.
        for (let i = 0; i < movieOption.length; i++) {
          let options = document.createElement("option");
          options.innerText = [0].title;
          options.value = [0].title;
          select.appendChild(options)
          debugger;
        }
      }
      selectMovieOptions()
      const movieDescription = () => {//[i]= should be theindex number of the movie array maybe try for loop here as well
        selectMovieOptions();//If I can get this to loop though the movies and display in the select then I should be able to key into it to have the info show in the movie description... or maybe the requestMoviesOption async function
        let title = document.createElement("h3");
        let movieYear = document.createElement("p");
        let movieSynop = document.createElement("p");
        // title.innerText = ;//movies.data[i].title
        // movieYear.innerText = ;//movies.data[i].release_date
        // movieSynop.innerText = ;//movies.data[i].description

        movieInfo.appendChild(title);
        movieInfo.appendChild(movieYear);
        movieInfo.appendChild(movieSynop);

        

      }
  }


  requestMovieInfo();
  // movieDescription();


})