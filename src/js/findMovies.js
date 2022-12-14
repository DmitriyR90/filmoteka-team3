import { genres } from '../genres.json';
import { showModal, closeModal } from './fb-film-modal';

export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'afc22cf5c573169849cabd6217d3b7d3';
let requestMovie = '';
let pageNumber = 1;
let totalPages = 1;
let searchingFlag = false;

const inputEl = document.querySelector('.header__input');
const searchButtonEl = document.querySelector('.search-btn');
const formEl = document.querySelector('.header__form');
const movieListEl = document.querySelector('.movie-list');
const closeModalBtn = document.querySelector('#modal-btn');
const paginationBtn = document.querySelectorAll('.pagination-btn');
const mainPaginationBtn = document.querySelector('.pagination-btn__main');
const arrowLeftBtn = document.querySelector('.pagination-btn__arrow-left');
const arrowRightBtn = document.querySelector('.pagination-btn__arrow-right');
const paginationNumbers = document.querySelector('.pagination-list');
const pagination = document.querySelector('.pagination');
const loadSpinner = document.querySelector('.loader');

formEl.addEventListener('submit', e => {
  e.preventDefault();
});

showMovies(createCurrentUrl(pageNumber));

searchButtonEl.addEventListener('click', loadMovies);
inputEl.addEventListener('input', serchingParametr);
movieListEl.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', () => closeModal());
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
document.querySelector('.drop-box').addEventListener('click', e => {
  if (!document.querySelector('.modal').contains(e.target)) {
    closeModal();
  }
});
arrowLeftBtn.addEventListener('click', () => {
  if (pageNumber <= 1) {
    return;
  }
  pageNumber -= 1;

  paginationPageChange();
});
arrowRightBtn.addEventListener('click', () => {
  if (totalPages <= pageNumber) {
    return;
  }
  pageNumber = Number.parseInt(pageNumber) + 1;

  paginationPageChange();
});
paginationNumbers.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.textContent && e.target.textContent !== '...') {
    pageNumber = e.target.textContent;

    paginationPageChange();
  }
});

function createCurrentUrl(pageNumber) {
  return `${API_URL}trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`;
}

function createSearchingUrl(requestMovie, pageNumber) {
  return `${API_URL}search/movie?api_key=${API_KEY}&query=${requestMovie.trim()}&page=${pageNumber}`;
}

function loadMovies(e) {
  let check = checkforNotFoundNotification(requestMovie.trim().length < 1);
  if (check) {
    pageNumber = 1;
    searchingFlag = true;
    loadSpinner.classList.remove('is-hidden__spinner');
    showMovies(createSearchingUrl(requestMovie, pageNumber));
  }
}

function showMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(movies => {
      checkforNotFoundNotification(
        movies.results === undefined || movies.results.length < 1
      );

      if (movies.results.length !== 0) {
        loadSpinner.classList.add('is-hidden__spinner');
        pagination.classList.remove(`is-stealth`);
        clearPage();
        totalPages = movies.total_pages;
        puginationNumeration(pageNumber, totalPages);
        movieListEl.insertAdjacentHTML('beforeend', createMoviesList(movies));
      }
    })
    .catch(error => console.log(error));
}

function serchingParametr(e) {
  requestMovie = e.currentTarget.value;
}

function createMoviesList(movies) {
  return movies.results
    .map(
      ({ poster_path, id, title, genre_ids, release_date, vote_average }) => {
        return `<li class="movie-item movie-view__image">
                    <img class="movie-img" src="${createImg(
                      poster_path
                    )}" data-id="${id}" alt="${title}" width="280">
                    <span class ="movie-view__rate">${vote_average}</span>
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(
                      genre_ids
                    )} | ${checkAndCreateDate(release_date)}</p>
                </li>`;
      }
    )
    .join('');
}

export function createImg(poster_path) {
  let noposter = new Image();
  noposter.src = require('../images/noposter.jpg');
  let posterPath = `https://image.tmdb.org/t/p/w300${poster_path}`;
  if (poster_path === null) {
    posterPath = noposter.src;
  }
  return posterPath;
}

function createGenresString(genre_ids) {
  if (genre_ids.length < 1) {
    return 'Unknown genre';
  }

  if (genre_ids.length > 2) {
    return (
      genre_ids
        .slice(0, 2)
        .map(id => {
          for (let i = 0; i < genres.length; i += 1) {
            if (genres[i].id === id) {
              return genres[i].name;
            }
          }
        })
        .join(', ') + ', others...'
    );
  }
  return genre_ids
    .map(id => {
      for (let i = 0; i < genres.length; i += 1) {
        if (genres[i].id === id) {
          return genres[i].name;
        }
      }
    })
    .join(', ');
}

export function checkAndCreateDate(release_date) {
  let date = 'Unknown date';
  if (release_date) {
    date = release_date.slice(0, 4);
  }

  return date;
}

function clearPage() {
  movieListEl.innerHTML = '';
}

function showNotFoundNotification() {
  document
    .querySelector('.not-found-notification')
    .classList.remove('disabled');
  loadSpinner.classList.add('is-hidden__spinner');
}

function clearNotFoundNotification() {
  document.querySelector('.not-found-notification').classList.add('disabled');
}

function checkforNotFoundNotification(flag) {
  if (flag) {
    showNotFoundNotification();
  } else {
    clearNotFoundNotification();
  }
  return document
    .querySelector('.not-found-notification')
    .classList.contains('disabled');
}

function puginationNumeration(currentPage, totalPages) {
  paginationBtn[0].textContent = Number.parseInt(currentPage) - 4 > 0 ? 1 : '';

  if (Number.parseInt(currentPage) - 3 === 1) {
    paginationBtn[1].textContent = 1;
  } else if (Number.parseInt(currentPage) - 3 > 0) {
    paginationBtn[1].textContent = '...';
  } else {
    paginationBtn[1].textContent = '';
  }
  paginationBtn[2].textContent =
    Number.parseInt(currentPage) - 2 > 0
      ? Number.parseInt(currentPage) - 2
      : '';
  paginationBtn[3].textContent =
    Number.parseInt(currentPage) - 1 > 0
      ? Number.parseInt(currentPage) - 1
      : '';
  mainPaginationBtn.textContent = Number.parseInt(currentPage);
  paginationBtn[5].textContent =
    Number.parseInt(currentPage) + 1 <= Number.parseInt(totalPages)
      ? Number.parseInt(currentPage) + 1
      : '';
  paginationBtn[6].textContent =
    Number.parseInt(currentPage) + 2 <= Number.parseInt(totalPages)
      ? Number.parseInt(currentPage) + 2
      : '';

  if (Number.parseInt(currentPage) + 3 === Number.parseInt(totalPages)) {
    paginationBtn[7].textContent = Number.parseInt(totalPages);
  } else if (Number.parseInt(currentPage) + 3 <= Number.parseInt(totalPages)) {
    paginationBtn[7].textContent = '...';
  } else {
    paginationBtn[7].textContent = '';
  }
  paginationBtn[8].textContent =
    Number.parseInt(currentPage) + 4 <= Number.parseInt(totalPages)
      ? Number.parseInt(totalPages)
      : '';

  if (!paginationBtn[5].textContent) {
    arrowRightBtn.classList.add('disabled');
  } else {
    arrowRightBtn.classList.remove('disabled');
  }

  if (!paginationBtn[3].textContent) {
    arrowLeftBtn.classList.add('disabled');
  } else {
    arrowLeftBtn.classList.remove('disabled');
  }
}

function paginationPageChange() {
  if (!searchingFlag) {
    showMovies(createCurrentUrl(pageNumber));
  } else {
    showMovies(createSearchingUrl(requestMovie, pageNumber));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
