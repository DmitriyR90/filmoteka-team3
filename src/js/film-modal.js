import { API_KEY, API_URL, createModalCard } from './findMovies';


let addToLibrBtn;
let addToQueueBtn;
let movieUrl = '';
let libraryMovieList = [];
let queueMovieList = [];

const buttonUpEl = document.querySelector('.button-up');

export function findMovieUrl(e) {
  movieUrl = e.target.dataset.id;
  console.log(movieUrl);
}

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
    })
    .catch(error => console.log(error));

  addToLibrBtn = document.querySelector('.add-watched-btn');
  addToQueueBtn = document.querySelector('.add-queue-btn');
  console.log(addToLibrBtn);
  console.log(addToQueueBtn);

}
// console.log(showModal.target.dataset.id);
export function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('body').classList.remove('overflow-hidden');
  buttonUpEl.classList.remove('is-hidden');
}

const modalAddMovie = document.querySelector('.modal');
modalAddMovie.addEventListener('click', () => {
  loadWatchedMovies;
  fetchWatchedMovies()
    .then((movie) => {
      addToWatchedFilms(movie);
     })
    .catch((error) => console.log(error));
});

modalAddMovie.addEventListener('click', () => {
  LoadQueueMovies;
  fetchQueueMovies()
    .then((movie) => {
      addToQueueFilms(movie);
     })
    .catch((error) => console.log(error));
});


function loadWatchedMovies(e) {

  let target = e.target;
  if (target.className !== 'button add-watched-btn') return; 
  // console.log('hello');
    
  // addToWatchedFilms();
}

function fetchWatchedMovies() {
  let url = `${API_URL}movie/${movieUrl}?api_key=${API_KEY}`;
  return fetch(url).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function addToWatchedFilms(movie) {
  libraryMovieList.push(movie);
  console.log(movie);
  return;
}
// console.log(libraryMovieList);

function LoadQueueMovies(e) {
  let target = e.target;
  if (target.className !== 'button add-queue-btn') return; 
  // console.log('hello');
    
  // addToWatchedFilms();
}

function fetchQueueMovies() {
  let url = `${API_URL}movie/${movieUrl}?api_key=${API_KEY}`;
  return fetch(url).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function addToQueueFilms(movie) {
  queueMovieList.push(movie);
  // console.log(movie);
  return;
}
// console.log(queueMovieList);