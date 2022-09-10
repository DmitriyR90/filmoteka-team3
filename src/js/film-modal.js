import { API_KEY, API_URL, createModalCard, createImg, createModalGenresString } from './findMovies';


// let addToLibrBtn;
// let addToQueueBtn;
// let movieUrl = '';
// let libraryMovieList = [];
// let queueMovieList = [];

const watchedMoviesStorageName = "watchedMoviesStorage";
const watchedMoviesButtonName = '.add-watched-btn';
const queueMoviesStorageName = "queueMoviesStorage";
const queueMoviesButtonName = '.add-queue-btn';

const buttonUpEl = document.querySelector('.button-up');

// export function findMovieUrl(e) {
//   movieUrl = e.target.dataset.id;
//   console.log(movieUrl);
// }

export async function showModal(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');
  buttonUpEl.classList.add('is-hidden');
  let url = `${API_URL}movie/${e.target.dataset.id}?api_key=${API_KEY}`;
  console.log(e.target.dataset.id);
  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
      document
        .querySelector('.modal-thumb')
        .insertAdjacentHTML('beforeend', createModalCard(movie));
      document.querySelector('body').classList.add('overflow-hidden');

      writeToStorage(movie, watchedMoviesStorageName, watchedMoviesButtonName);
      writeToStorage(movie, queueMoviesStorageName, queueMoviesButtonName);
    })
    .catch(error => console.log(error));

  // addToLibrBtn = document.querySelector('.add-watched-btn');
  // addToQueueBtn = document.querySelector('.add-queue-btn');
  // console.log(addToLibrBtn);
  // console.log(addToQueueBtn); 

}
// console.log(showModal.target.dataset.id);
export function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('body').classList.remove('overflow-hidden');
  buttonUpEl.classList.remove('is-hidden');
}


function writeToStorage(movie, storageName, buttonName) {
  document.querySelector(buttonName).addEventListener('click', () => {        
        const movieItem = {
          id: movie.id,
          title: movie.title,
          img: createImg(movie.poster_path),
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          popularity: movie.popularity,
          original_title: movie.original_title,
          genres: createModalGenresString(movie.genres),
          overview: movie.overview,
    }
    
        if (localStorage.getItem(storageName)) {
          const savedwatchedMovies = JSON.parse(localStorage.getItem(storageName));

          for (let i = 0; i < savedwatchedMovies.length; i += 1) {
            if (savedwatchedMovies[i].id === movieItem.id)
              return;
          }
          
          savedwatchedMovies.push(movieItem);
          localStorage.setItem(storageName, JSON.stringify(savedwatchedMovies));
        } else {
          const savedwatchedMovies = [movieItem];
          localStorage.setItem(storageName, JSON.stringify(savedwatchedMovies));
        }        
      });
}





// const modalAddMovie = document.querySelector('.modal');
// modalAddMovie.addEventListener('click', () => {
//   loadWatchedMovies;
//   fetchWatchedMovies()
//     .then((movie) => {
//       addToWatchedFilms(movie);
//      })
//     .catch((error) => console.log(error));
// });

// modalAddMovie.addEventListener('click', () => {
//   LoadQueueMovies;
//   fetchQueueMovies()
//     .then((movie) => {
//       addToQueueFilms(movie);
//      })
//     .catch((error) => console.log(error));
// });


// function loadWatchedMovies(e) {

//   let target = e.target;
//   if (target.className !== 'button add-watched-btn') return; 
//   // console.log('hello');
    
//   // addToWatchedFilms();
// }

// function fetchWatchedMovies() {
//   let url = `${API_URL}movie/${movieUrl}?api_key=${API_KEY}`;
//   return fetch(url).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function addToWatchedFilms(movie) {
//   libraryMovieList.push(movie);
//   console.log(movie);
//   return;
// }
// // console.log(libraryMovieList);

// function LoadQueueMovies(e) {
//   let target = e.target;
//   if (target.className !== 'button add-queue-btn') return; 
//   // console.log('hello');
    
//   // addToWatchedFilms();
// }

// function fetchQueueMovies() {
//   let url = `${API_URL}movie/${movieUrl}?api_key=${API_KEY}`;
//   return fetch(url).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function addToQueueFilms(movie) {
//   queueMovieList.push(movie);
//   // console.log(movie);
//   return;
// }
// // console.log(queueMovieList);