function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("a79Io",(function(e,t){e.exports=new URL(i("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.058f580a.js","iHCDC":"noposter.751b8d89.jpg","6P0kS":"index.431efa7e.js","8mGr4":"index.8d61d521.js"}'));var a;a=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystery"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}]}');var s=i("25RCP"),r=i("9jUAk"),c=i("amyG6");s=i("25RCP"),r=i("9jUAk"),c=i("amyG6");const d=document.querySelector("#user-email-reg"),l=document.querySelector("#user-password-reg"),u=document.querySelector("#btn-reg"),m=document.querySelector("#user-email-auth"),p=document.querySelector("#user-password-auth"),f=document.querySelector("#btn-auth"),g=document.querySelector(".library"),v=document.querySelector(".authorization"),h=document.querySelector(".auth-modal"),b=document.querySelector(".registr-modal"),y=document.querySelector("body");v.classList.add("is-stealth"),g.classList.add("is-stealth");(0,s.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});const _=(0,r.getFirestore)(),L=(0,c.getAuth)();u.addEventListener("click",(async function(e){e.preventDefault();const t=d.value,n=l.value;try{const e=await(0,c.createUserWithEmailAndPassword)(L,t,n);!async function(e,t){const n={email:e,id:t,filmsWatched:[],filmsQueue:[]};try{await(0,r.setDoc)((0,r.doc)(_,"users",`${t}`),n,{merge:!0})}catch(e){console.log(e)}}(t,e.user.uid),console.log("new user"),g.classList.remove("is-stealth"),v.classList.add("is-stealth"),b.classList.remove("open"),y.classList.remove("overflow-hidden")}catch(e){console.log(e)}})),f.addEventListener("click",(async function(e){e.preventDefault();const t=m.value,n=p.value;try{await(0,c.signInWithEmailAndPassword)(L,t,n);g.classList.remove("is-stealth"),v.classList.add("is-stealth"),h.classList.remove("open"),y.classList.remove("overflow-hidden")}catch(e){console.log("error")}}));(0,c.onAuthStateChanged)(L,(e=>{e?g.classList.remove("is-stealth"):(v.classList.remove("is-stealth"),console.log("user is logout"))}));(0,s.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});const S=(0,r.getFirestore)(),q=(0,c.getAuth)();let w,k;const x=document.querySelector(".button-up");function C(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector(".modal-thumb").innerHTML="",document.querySelector("body").classList.remove("overflow-hidden"),x.classList.remove("is-hidden")}function E(e){return e.map((e=>e.name)).join(", ")}const I="https://api.themoviedb.org/3/",A="afc22cf5c573169849cabd6217d3b7d3";let N="",$=1,D=1,j=!1;const W=document.querySelector(".header__input"),T=document.querySelector(".search-btn"),F=document.querySelector(".header__form"),H=document.querySelector(".movie-list"),P=document.querySelector("#modal-btn"),R=document.querySelectorAll(".pagination-btn"),z=document.querySelector(".pagination-btn__main"),Q=document.querySelector(".pagination-btn__arrow-left"),U=document.querySelector(".pagination-btn__arrow-right"),B=document.querySelector(".pagination-list"),M=document.querySelector(".pagination"),O=document.querySelector(".loader");function G(e){return`${I}trending/movie/week?api_key=${A}&page=${e}`}function Z(e,t){return`${I}search/movie?api_key=${A}&query=${e.trim()}&page=${t}`}function K(e){fetch(e).then((e=>e.json())).then((e=>{console.log(e),ee(void 0===e.results||e.results.length<1),0!==e.results.length&&(O.classList.add("is-hidden__spinner"),M.classList.remove("is-stealth"),H.innerHTML="",D=e.total_pages,function(e,t){R[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?R[1].textContent=1:Number.parseInt(e)-3>0?R[1].textContent="...":R[1].textContent="";R[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",R[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",z.textContent=Number.parseInt(e),R[5].textContent=Number.parseInt(e)+1<=Number.parseInt(t)?Number.parseInt(e)+1:"",R[6].textContent=Number.parseInt(e)+2<=Number.parseInt(t)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(t)?R[7].textContent=Number.parseInt(t):Number.parseInt(e)+3<=Number.parseInt(t)?R[7].textContent="...":R[7].textContent="";R[8].textContent=Number.parseInt(e)+4<=Number.parseInt(t)?Number.parseInt(t):"",R[5].textContent?U.classList.remove("disabled"):U.classList.add("disabled");R[3].textContent?Q.classList.remove("disabled"):Q.classList.add("disabled")}($,D),H.insertAdjacentHTML("beforeend",function(e){return e.results.map((({poster_path:e,id:t,title:n,genre_ids:o,release_date:i})=>`<li class="movie-item">\n                    <img class="movie-img" src="${X(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${function(e){return e.length<1?"Unknown genre":e.length>2?e.slice(0,2).map((e=>{for(let t=0;t<a.genres.length;t+=1)if(a.genres[t].id===e)return a.genres[t].name})).join(", ")+", others...":e.map((e=>{for(let t=0;t<a.genres.length;t+=1)if(a.genres[t].id===e)return a.genres[t].name})).join(", ")}(o)} | ${Y(i)}</p>\n                </li>`)).join("")}(e)))})).catch((e=>console.log(e)))}F.addEventListener("submit",(e=>{e.preventDefault()})),K(G($)),T.addEventListener("click",(function(e){ee(N.trim().length<1)&&($=1,j=!0,O.classList.remove("is-hidden__spinner"),K(Z(N,$)))})),W.addEventListener("input",(function(e){N=e.currentTarget.value})),H.addEventListener("click",(async function(e){if("IMG"!==e.target.nodeName)return;document.querySelector(".drop-box").classList.remove("drop-box--is-hidden"),x.classList.add("is-hidden");let t=`${I}movie/${e.target.dataset.id}?api_key=${A}`;await fetch(t).then((e=>e.json())).then((e=>{document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return`<img class="modal__img" src="${X(e.poster_path)}" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">${e.title}</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">${e.vote_average}</span> / <span class="movie-votes__sec">${e.vote_count}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">${e.popularity}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">${e.original_title}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">${E(e.genres)}</span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">${e.overview}</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn" type="button" id="filmsWatched">Add to Watched</button>\n                        </li>\n                        <li class="modal-btns__item">\n                            <button class="button add-queue-btn" type="button" id="filmsQueue">Add to queue</button>\n                        </li>\n                    </ul>\n                </div>`}(e)),document.querySelector("body").classList.add("overflow-hidden"),function(e,t){(0,c.onAuthStateChanged)(q,(n=>{if(n){async function o(n){const o=await(0,r.getDoc)((0,r.doc)(S,"users",`${n}`));if(o.exists()){const n=o.data();for(let o=0;o<n.filmsWatched.length;o+=1){if(n.filmsWatched[o].id===e.id)return void(document.querySelector(t).textContent="Delete from watched");document.querySelector(t).textContent="Add to watched"}console.log(n.filmsWatched)}}o(n.uid)}else console.log("user is logout")}))}(e,".add-watched-btn"),function(e,t){(0,c.onAuthStateChanged)(q,(n=>{if(n){async function o(n){const o=await(0,r.getDoc)((0,r.doc)(S,"users",`${n}`));if(o.exists()){const n=o.data();for(let o=0;o<n.filmsQueue.length;o+=1){if(n.filmsQueue[o].id===e.id)return void(document.querySelector(t).textContent="Delete from queue");document.querySelector(t).textContent="Add to queue"}console.log(n.filmsQueue)}}o(n.uid)}else console.log("user is logout")}))}(e,".add-queue-btn"),w=document.querySelector(".add-watched-btn"),k=document.querySelector(".add-queue-btn"),w.addEventListener("click",(function(t){const n=t.target.id;console.log(n);const o={id:e.id,title:e.title,img:X(e.poster_path),vote_average:e.vote_average,vote_count:e.vote_count,popularity:e.popularity,original_title:e.original_title,genres:E(e.genres),overview:e.overview,date:Y(e.release_date)};(0,c.onAuthStateChanged)(q,(e=>{if(e){const i=e.uid;!async function(e){const a=await(0,r.getDoc)((0,r.doc)(S,"users",`${e}`));if(a.exists()){const e=a.data();for(let a=0;a<e.filmsWatched.length;a+=1)if(e.filmsWatched[a].id===o.id)return(0,r.updateDoc)((0,r.doc)(S,"users",`${i}`),{[n]:(0,r.arrayRemove)(o)}),void(t.target.textContent="Add to watched");(0,r.updateDoc)((0,r.doc)(S,"users",`${i}`),{[n]:(0,r.arrayUnion)(o)}),t.target.textContent="Delete from watched",console.log(e.filmsWatched)}}(i)}else console.log("user is logout")}))})),k.addEventListener("click",(function(t){const n=t.target.id;console.log(n);const o={id:e.id,title:e.title,img:X(e.poster_path),vote_average:e.vote_average,vote_count:e.vote_count,popularity:e.popularity,original_title:e.original_title,genres:E(e.genres),overview:e.overview,date:Y(e.release_date)};(0,c.onAuthStateChanged)(q,(e=>{if(e){const i=e.uid;!async function(e){const a=await(0,r.getDoc)((0,r.doc)(S,"users",`${e}`));if(a.exists()){const e=a.data();for(let a=0;a<e.filmsQueue.length;a+=1)if(e.filmsQueue[a].id===o.id)return(0,r.updateDoc)((0,r.doc)(S,"users",`${i}`),{[n]:(0,r.arrayRemove)(o)}),void(t.target.textContent="Add to queue");(0,r.updateDoc)((0,r.doc)(S,"users",`${i}`),{[n]:(0,r.arrayUnion)(o)}),t.target.textContent="Delete from queue",console.log(e.filmsQueue)}}(i)}else console.log("user is logout")}))}))})).catch((e=>console.log(e)))})),P.addEventListener("click",(()=>C())),document.addEventListener("keydown",(e=>{"Escape"===e.code&&C()})),document.querySelector(".drop-box").addEventListener("click",(e=>{document.querySelector(".modal").contains(e.target)||C()})),Q.addEventListener("click",(()=>{$<=1||($-=1,te())})),U.addEventListener("click",(()=>{D<=$||($=Number.parseInt($)+1,te())})),B.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&($=e.target.textContent,te())}));let J=0;const V=document.querySelector(".button-up");function X(e){let t=new Image;t.src=i("a79Io");let n=`https://image.tmdb.org/t/p/w300${e}`;return null===e&&(n=t.src),n}function Y(e){let t="Unknown date";return e&&(t=e.slice(0,4)),t}function ee(e){return e?(document.querySelector(".not-found-notification").classList.remove("disabled"),O.classList.add("is-hidden__spinner")):document.querySelector(".not-found-notification").classList.add("disabled"),document.querySelector(".not-found-notification").classList.contains("disabled")}function te(){K(j?Z(N,$):G($)),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){let e=window.scrollY;e<J?V.classList.add("is-hidden"):V.classList.remove("is-hidden"),J=e}));const ne=document.querySelector(".authorization"),oe=document.querySelector(".auth-modal"),ie=document.querySelector("#auth-modal-btn"),ae=document.querySelector(".registration"),se=document.querySelector("#registr-modal"),re=document.querySelector("#registr-modal-btn"),ce=document.querySelector(".auth-modal__box"),de=document.querySelector(".registr-modal__box"),le=document.querySelector(".authorization-link"),ue=document.querySelector("body");function me(){oe.classList.remove("open"),ue.classList.remove("overflow-hidden"),document.removeEventListener("keydown",he),ie.removeEventListener("click",me),ce.removeEventListener("click",pe)}function pe(e){e.currentTarget===e.target&&me()}function fe(e){e.preventDefault(),se.classList.remove("open"),oe.classList.add("open")}function ge(){se.classList.remove("open"),ue.classList.remove("overflow-hidden"),re.removeEventListener("click",ge),de.removeEventListener("click",ve),le.removeEventListener("click",fe)}function ve(e){e.currentTarget===e.target&&ge()}function he(e){"Escape"===e.code&&(me(),ge())}ne.addEventListener("click",(function(e){e.preventDefault(),oe.classList.add("open"),ue.classList.add("overflow-hidden"),document.addEventListener("keydown",he),ie.addEventListener("click",me),ce.addEventListener("click",pe)})),ae.addEventListener("click",(function(e){e.preventDefault(),oe.classList.remove("open"),se.classList.add("open"),re.addEventListener("click",ge),de.addEventListener("click",ve),le.addEventListener("click",fe)})),i("hIzJZ");s=i("25RCP"),c=i("amyG6");const be=document.querySelector("#logout-main");be.classList.add("is-stealth");(0,s.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});const ye=(0,c.getAuth)();be.addEventListener("click",(function(){(0,c.signOut)(ye).then((()=>{location.href="../index.html",console.log("Sign-out successful.")})).catch((e=>{console.log(qwe)}))})),(0,c.onAuthStateChanged)(ye,(e=>{e?be.classList.remove("is-stealth"):(be.classList.add("is-stealth"),console.log("user is logout"))}));
//# sourceMappingURL=index.058f580a.js.map
