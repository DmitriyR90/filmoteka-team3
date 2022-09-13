import { API_KEY, API_URL, createImg, checkAndCreateDate } from './findMovies';
import { initializeApp } from 'firebase/app';
import { readTheDoc, getFirestore, doc, setDoc, getDoc, exists, onSnapshot, updateDoc, arrayUnion, collection, query, where, getDocs, arrayRemove } from 'firebase/firestore/lite';
import { getAuth, showLoginError, onAuthStateChanged, AuthErrorCodes } from 'firebase/auth';
import './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",
    authDomain: "filmoteka-bdb19.firebaseapp.com",
    projectId: "filmoteka-bdb19",
    storageBucket: "filmoteka-bdb19.appspot.com",
    messagingSenderId: "1051248700372",
    appId: "1:1051248700372:web:2dc6796345cd1c6fa94441"
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(); //наша бд
const auth = getAuth();
let addToLibrBtn;
let addToQueueBtn;

const buttonUpEl = document.querySelector('.button-up');


const watchedMoviesStorageName = 'filmsWatched';
const watchedMoviesButtonName = '.add-watched-btn';
const queueMoviesStorageName = 'filmsQueue';
const queueMoviesButtonName = '.add-queue-btn';

export async function showModal(e) {
  // console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');
  buttonUpEl.classList.add('is-hidden');
  let url = `${API_URL}movie/${e.target.dataset.id}?api_key=${API_KEY}`;

  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      onShowPlayer(movie);
      document
      .querySelector('.modal-thumb')
      .insertAdjacentHTML('beforeend', createModalCard(movie));
      document.querySelector('body').classList.add('overflow-hidden');


      checkWatchedButton(movie, watchedMoviesButtonName);
      checkQueueButton(movie, queueMoviesButtonName);

    
      addToLibrBtn = document.querySelector(watchedMoviesButtonName);
      addToQueueBtn = document.querySelector(queueMoviesButtonName);

      addToLibrBtn.addEventListener('click', addToLibrary);
      addToQueueBtn.addEventListener('click', addQueueLibrary);

      function addToLibrary(e) { // додає дані до firestore
          const arrayName = e.target.id; // масив до якого треба дод дані, відповідно до того по якій кнопці нажали          
          console.log(arrayName);
      
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
              date: checkAndCreateDate(movie.release_date),
          }

        
          onAuthStateChanged(auth, (user) => { //перевіряємо чи користувач залогінений
              if (user) {
                  // User is signed in, see docs for a list of available properties
                  const uid = user.uid; //id користувача
                  //   Оновлюємо дані 
                
                  
                async function readTheDoc(id) {
                  const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
                  if (myDoc.exists()) {
                    const data = myDoc.data();

                    for (let i = 0; i < data.filmsWatched.length; i += 1) {
                      if (data.filmsWatched[i].id === movieItem.id) {
                        updateDoc(doc(firestore, 'users', `${uid}`), {  //оновлюємо дані в firestore
                          [arrayName]: arrayRemove(movieItem)  // видаляємо об`єкт фільму з масиву
                        })

                        e.target.textContent = "Add to watched";
                        return;
                      } 
                    }

                    updateDoc(doc(firestore, 'users', `${uid}`), {
                      [arrayName]: arrayUnion(movieItem)  // додаємо об`єкт фільму до масиву (це треба буде видалити, якщо буде умова з іф)
                    })
                    e.target.textContent = "Delete from watched";
                    console.log(data.filmsWatched);  
                  }
                };      
                readTheDoc(uid); 
              } else {
                  console.log('user is logout');
                  } 
          })
      }
      
      function addQueueLibrary(e) { // додає дані до firestore
          const arrayName = e.target.id; // масив до якого треба дод дані, відповідно до того по якій кнопці нажали          
          console.log(arrayName);
      
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
              date: checkAndCreateDate(movie.release_date),
          }
        
          onAuthStateChanged(auth, (user) => { //перевіряємо чи користувач залогінений
              if (user) {
                  // User is signed in, see docs for a list of available properties
                  const uid = user.uid; //id користувача
                  //   Оновлюємо дані 
                
                  
                async function readTheDoc(id) {
                  const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
                  if (myDoc.exists()) {
                    const data = myDoc.data();

                    for (let i = 0; i < data.filmsQueue.length; i += 1) {
                      if (data.filmsQueue[i].id === movieItem.id) {
                        updateDoc(doc(firestore, 'users', `${uid}`), {  //оновлюємо дані в firestore
                          [arrayName]: arrayRemove(movieItem)  // видаляємо об`єкт фільму з масиву
                        })

                        e.target.textContent = "Add to queue";
                        return;
                      } 
                    }

                    updateDoc(doc(firestore, 'users', `${uid}`), {
                      [arrayName]: arrayUnion(movieItem)  // додаємо об`єкт фільму до масиву (це треба буде видалити, якщо буде умова з іф)
                    })
                    e.target.textContent = "Delete from queue";
                    console.log(data.filmsQueue);  
                  }
                };      
                readTheDoc(uid); 
              } else {
                  console.log('user is logout');
                  } 
          })
        }       
    
      checkUserLogIn();
      
    }).catch(error => console.log(error));
}

function checkUserLogIn() {
  onAuthStateChanged(auth, (user) => { //перевіряємо чи користувач залогінений
    if (!user) {
      document.querySelector(watchedMoviesButtonName).classList.add('disabled');
      document.querySelector(queueMoviesButtonName).classList.add('disabled');
    } 
  })
}

function checkWatchedButton(movie, buttonName) {
  onAuthStateChanged(auth, (user) => { //перевіряємо чи користувач залогінений
    if (user) {      
      const uid = user.uid; //id користувача
      
      async function readTheDoc(id) {
        const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
        if (myDoc.exists()) {
          const data = myDoc.data();
          for (let i = 0; i < data.filmsWatched.length; i += 1) {
            if (data.filmsWatched[i].id === movie.id) {                    
              document.querySelector(buttonName).textContent = "Delete from watched";
              return;
            } else {
              document.querySelector(buttonName).textContent =  "Add to watched";
            }                     
        
          }                                  
          console.log(data.filmsWatched);  
        }
      };      
      readTheDoc(uid);      

    } else {
      console.log('user is logout');
    } 
})
}

function checkQueueButton(movie, buttonName) {
  onAuthStateChanged(auth, (user) => { //перевіряємо чи користувач залогінений
    if (user) {      
      const uid = user.uid; //id користувача
      
      async function readTheDoc(id) {
        const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
        if (myDoc.exists()) {
          const data = myDoc.data();
          for (let i = 0; i < data.filmsQueue.length; i += 1) {
            if (data.filmsQueue[i].id === movie.id) {                    
              document.querySelector(buttonName).textContent = "Delete from queue";
              return;
            } else {
              document.querySelector(buttonName).textContent =  "Add to queue";
            }                     
        
          }                                  
          console.log(data.filmsQueue);  
        }
      };      
      readTheDoc(uid);      

    } else {
      console.log('user is logout');
    } 
})
}

export function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('body').classList.remove('overflow-hidden');
  buttonUpEl.classList.remove('is-hidden');
  // document.querySelector('.movie-list').removeEventListener('click', showModal);
  // document.querySelector('#modal-btn').removeEventListener('click', closeModal);
}

export function createModalCard(movie) {
  return `<img class="modal__img" src="${createImg(
    movie.poster_path
  )}" alt="" width="240">
                <div class="modal__description-thumb">
                    <h2 class="modal__title">${movie.title}</h2>
                    <ul class="movie-data">
                        <li>
                            <ul class="movie-data__name">
                                <li>Vote / Votes</li>
                                <li>Popularity</li>
                                <li>Original Title</li>
                                <li>Genre</li>
                            </ul>
                        </li>
                        <li>
                            <ul class="movie-data__content">
                                <li class="movie-data__item">
                                    <span class="movie-votes__first">${
                                      movie.vote_average
                                    }</span> / <span class="movie-votes__sec">${
    movie.vote_count
  }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-popularity__item">${
                                      movie.popularity
                                    }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-orig-title__item">${
                                      movie.original_title
                                    }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-genre__item">${createModalGenresString(
                                      movie.genres
                                    )}</span>
                                </li>
                            </ul>
                        </li>  
                    </ul>
                    
                    <p class="movie-about">About</p>
                    <p class="movie-about-text">${movie.overview}</p>
                    <ul class="modal-btns">
                        <li class="modal-btns__item">
                            <button class="button add-watched-btn" type="button" id="filmsWatched">Add to Watched</button>
                        </li>
                        <li class="modal-btns__item">
                            <button class="button add-queue-btn" type="button" id="filmsQueue">Add to queue</button>
                        </li>
                    </ul>
                </div>`;
}

function createModalGenresString(genres) {
  return genres.map(genre => genre.name).join(', ');
}

let QUERY ='';
async function onShowPlayer(movie) {
  console.log(movie);
  await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=afc22cf5c573169849cabd6217d3b7d3&language=en-US`
  )
    .then(response => response.json())
    .then(items => {
      console.log(items)
      for (const item of items.results) {
        console.log(item);
        if (
          item.site === 'YouTube' &&
          item.name === 'Official Trailer' ||
          item.name === 'Teaser Trailer'
        ) {
          QUERY = item.key;
          console.log(item.name);
          player.insertAdjacentHTML('beforeend', parsPlayer(QUERY));
        }
        }
    });
}
const player = document.querySelector('.modal-thumb');
const imgRef = document.querySelector('modal__img');
const youtube = document.querySelector('.youtube');

function parsPlayer(QUERY) {
  return `<div class="youtube is-hidden__spinner">
  <iframe class="video"
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="http://www.youtube.com/embed/${QUERY}?autoplay=1"
      frameborder="0"
    />
  </div>`;  
}


  // youtube.classList.remove('.is-hidden__spinner');
