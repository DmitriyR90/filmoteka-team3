function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var s,i;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("a79Io",(function(e,t){e.exports=new URL(i("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"5FICj":"librarypage.cf111c66.js","iHCDC":"noposter.751b8d89.jpg","8mGr4":"index.8d61d521.js"}')),i("hIzJZ");var o=i("25RCP"),a=i("9jUAk"),l=i("amyG6");(0,o.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});const r=(0,a.getFirestore)(),c=(0,l.getAuth)(),d=document.querySelector(".info"),u=document.querySelector(".movie-list"),m=document.querySelector(".queue-btn"),p=document.querySelector(".watched-btn"),v=document.querySelector(".loader"),b=document.querySelectorAll(".pagination-btn"),f=document.querySelector(".pagination-btn__main"),g=document.querySelector(".pagination-btn__arrow-left"),_=document.querySelector(".pagination-btn__arrow-right"),h=document.querySelector(".pagination-list"),L=document.querySelector(".pagination");let y=1,x=1;function S(){p.classList.add("active-btn"),m.classList.remove("active-btn"),(0,l.onAuthStateChanged)(c,(e=>{if(e){w(e.uid).then((e=>e)).then((e=>{let t=e.filmsWatched;if(x=Math.ceil(t.length/20),1!==x){let n=20*y,s=n-20;return console.log(n),t=e.filmsWatched.slice(s,n),q(t),console.log(x),L.classList.remove("is-stealth"),void $(y,x)}q(t),y=1,console.log(x),L.classList.remove("is-stealth"),$(y,x)}))}else console.log("user is logout")}))}function I(e){y=1,v.classList.remove("is-hidden__spinner"),e.target===p?(v.classList.add("is-hidden__spinner"),p.classList.add("active-btn"),m.classList.remove("active-btn")):e.target===m&&(p.classList.remove("active-btn"),m.classList.add("active-btn"),v.classList.add("is-hidden__spinner"));const t=e.target.id;(0,l.onAuthStateChanged)(c,(e=>{if(e){w(e.uid).then((e=>e)).then((e=>{let n=e[t];if(x=Math.ceil(n.length/20),1===x)N(n),y=1,console.log(x),L.classList.remove("is-stealth"),$(y,x);else{let s=20*y,i=s-20;console.log(s),n=e[t].slice(i,s),N(n),console.log(x),L.classList.remove("is-stealth"),$(y,x)}}))}else console.log("user is logout")}))}async function w(e){const t=await(0,a.getDoc)((0,a.doc)(r,"users",`${e}`));if(t.exists()){return t.data()}}function N(e){u.innerHTML="",e.length<1?d.classList.remove("is-stealth"):(d.classList.add("is-stealth"),C(e),L.classList.remove("is-stealth"),$(y,x))}function C(e){const t=e.map((({img:e,id:t,title:n,genres:s,date:o})=>`<li class="movie-item">\n                    <img class="movie-img" src="${function(e){let t=new Image;t.src=i("a79Io");let n=e;null!==e&&""!==e||(n=t.src);return n}(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${function(e){if(""===e)return"Unknown genre";if(e.includes(",")){const t=e.split(",");return t.length>2?t.slice(0,2).join(", ")+", others...":t.join(", ")}return e}(s)} | ${o}</p>\n                </li>`)).join("");u.insertAdjacentHTML("beforeend",t)}function q(e){u.innerHTML="",0===e.length?d.classList.remove("is-stealth"):(d.classList.add("is-stealth"),C(e))}function $(e,t){b[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?b[1].textContent=1:Number.parseInt(e)-3>0?b[1].textContent="...":b[1].textContent="",b[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",b[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",f.textContent=Number.parseInt(e),b[5].textContent=Number.parseInt(e)+1<=Number.parseInt(t)?Number.parseInt(e)+1:"",b[6].textContent=Number.parseInt(e)+2<=Number.parseInt(t)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(t)?b[7].textContent=Number.parseInt(t):Number.parseInt(e)+3<=Number.parseInt(t)?b[7].textContent="...":b[7].textContent="",b[8].textContent=Number.parseInt(e)+4<=Number.parseInt(t)?Number.parseInt(t):"",b[5].textContent?_.classList.remove("disabled"):_.classList.add("disabled"),b[3].textContent?g.classList.remove("disabled"):g.classList.add("disabled")}function E(){if(p.classList.contains("active-btn"))return S(),void window.scrollTo({top:0,behavior:"smooth"});p.classList.remove("active-btn"),m.classList.add("active-btn"),(0,l.onAuthStateChanged)(c,(e=>{e?w(e.uid).then((e=>e)).then((e=>{let t=e.filmsQueue;if(x=Math.ceil(t.length/20),1!==x){let n=20*y,s=n-20;return console.log(n),t=e.filmsQueue.slice(s,n),q(t),console.log(x),L.classList.remove("is-stealth"),void $(y,x)}q(t),y=1,console.log(x),L.classList.remove("is-stealth"),$(y,x)})):console.log("user is logout")})),window.scrollTo({top:0,behavior:"smooth"})}S(),v.classList.add("is-hidden__spinner"),m.addEventListener("click",I),p.addEventListener("click",I),g.addEventListener("click",(()=>{y<=1||(y-=1,E())})),_.addEventListener("click",(()=>{x<=y||(y=Number.parseInt(y)+1,E())})),h.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&(y=e.target.textContent,E())})),u.addEventListener("click",(async function(e){const t=e.target.dataset.id;if("IMG"!==e.target.nodeName)return;document.querySelector(".drop-box").classList.remove("drop-box--is-hidden"),(0,l.onAuthStateChanged)(c,(e=>{if(e){const n=e.uid;w(n).then((e=>e)).then((e=>{let s;if(p.classList.contains("active-btn")){s=e.filmsWatched;const o=s.find((e=>e.id===Number(t)));i=o,document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return`<img class="modal__img" src="${e.img}" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">${e.title}</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">${e.vote_average}</span> / <span class="movie-votes__sec">${e.vote_count}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">${e.popularity}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">${e.original_title}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">\n                                      ${e.genres}\n                                    </span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">${e.overview}</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn delete" type="button" id="filmsWatchedDelete">Delete from Watched</button>\n                        </li>\n                        \n                    </ul>\n                </div>`}(i)),document.querySelector("body").classList.add("overflow-hidden");document.querySelector("#filmsWatchedDelete").addEventListener("click",(function(){(0,a.updateDoc)((0,a.doc)(r,"users",n),{filmsWatched:(0,a.arrayRemove)(o)})}))}else if(m.classList.contains("active-btn")){s=e.filmsQueue;const i=s.find((e=>e.id===Number(t)));!function(e){document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return`<img class="modal__img" src="${e.img}" alt="" width="240">\n              <div class="modal__description-thumb">\n                  <h2 class="modal__title">${e.title}</h2>\n                  <ul class="movie-data">\n                      <li>\n                          <ul class="movie-data__name">\n                              <li>Vote / Votes</li>\n                              <li>Popularity</li>\n                              <li>Original Title</li>\n                              <li>Genre</li>\n                          </ul>\n                      </li>\n                      <li>\n                          <ul class="movie-data__content">\n                              <li class="movie-data__item">\n                                  <span class="movie-votes__first">${e.vote_average}</span> / <span class="movie-votes__sec">${e.vote_count}</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-popularity__item">${e.popularity}</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-orig-title__item">${e.original_title}</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-genre__item">\n                                    ${e.genres}\n                                  </span>\n                              </li>\n                          </ul>\n                      </li>  \n                  </ul>\n                  \n                  <p class="movie-about">About</p>\n                  <p class="movie-about-text">${e.overview}</p>\n                  <ul class="modal-btns">\n                      <li class="modal-btns__item">\n                          <button class="button add-watched-btn delete" type="button" id="filmsQueueDelete">Delete from queue</button>\n                      </li>\n                  </ul>\n              </div>`}(e)),document.querySelector("body").classList.add("overflow-hidden")}(i);document.querySelector("#filmsQueueDelete").addEventListener("click",(function(){(0,a.updateDoc)((0,a.doc)(r,"users",n),{filmsQueue:(0,a.arrayRemove)(i)})}))}var i}))}else console.log("user is logout")}))}));function k(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector(".modal-thumb").innerHTML="",document.querySelector("body").classList.remove("overflow-hidden"),buttonUpEl.classList.remove("is-hidden")}document.querySelector("#modal-btn").addEventListener("click",(()=>k())),document.addEventListener("keydown",(e=>{"Escape"===e.code&&k()})),document.querySelector(".drop-box").addEventListener("click",(e=>{document.querySelector(".modal").contains(e.target)||k()}));
//# sourceMappingURL=librarypage.cf111c66.js.map
