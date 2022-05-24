const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='+Math.floor(Math.random()*10);
const IMG_PATH = 'https://image.tmdb.org/t/p/w300'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

getMoviesList(API_URL);


const movieList = document.getElementsByClassName("movie-list")[0];

async function getMoviesList(url){
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data.results)
}

const showMovies = (results) => {
    movieList.innerHTML=""
    results.forEach(element => {
        const { title, poster_path, vote_average, overview } = element;
        const individualMovie = document.createElement('div');
        individualMovie.className = "individual-movie";
        individualMovie.innerHTML = `
        
        <div class="card-inactive">
        <img
        src="${IMG_PATH}/${poster_path}" 
        alt="Movie-poster"
      />
      <div class="description">
        <h2 class="movie-name">${title}</h2>
        <p class="movie-rating red">${vote_average}</p>
      </div>
    </div>
    <div class="card-active">
      <h3>Overview</h3>
      <p>
       ${overview}
      </p>
    </div>
    </div>
        `
    movieList.append(individualMovie);
        
    });
}

async function search(){
    const searchThread = document.getElementsByClassName("search")[0];
      getMoviesList(API_URL);
      const response = await fetch(SEARCH_API+searchThread.value);
      const data = await response.json();
      if(data.total_results=0){
        getMoviesList(API_URL);
        
      }
      showMovies(data.results)
}
