function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("a79Io",(function(e,t){e.exports=new URL(r("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.4a535bb1.js","iHCDC":"noposter.751b8d89.jpg"}'));var i;let a,s;i=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystery"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}]}');const d=document.querySelector(".button-up");function l(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector(".modal-thumb").innerHTML="",document.querySelector("body").classList.remove("overflow-hidden"),d.classList.remove("is-hidden")}function c(e){return e.map((e=>e.name)).join(", ")}function u(e,t,n){document.querySelector(n).addEventListener("click",(n=>{const o={id:e.id,title:e.title,img:D(e.poster_path),vote_average:e.vote_average,vote_count:e.vote_count,popularity:e.popularity,original_title:e.original_title,genres:c(e.genres),overview:e.overview,date:j(e.release_date)};if(localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));for(let r=0;r<e.length;r+=1)if(e[r].id===o.id)return n.target.textContent=`Add to ${n.target.textContent.split(" ")[2]}`,e.splice(r,r+1),void localStorage.setItem(t,JSON.stringify(e));e.push(o),localStorage.setItem(t,JSON.stringify(e)),n.target.textContent=`Delete from ${n.target.textContent.split(" ")[2]}`}else{const e=[o];localStorage.setItem(t,JSON.stringify(e))}}))}function m(e,t,n){if(localStorage.getItem(t)){const o=JSON.parse(localStorage.getItem(t));for(let t=0;t<o.length;t+=1)o[t].id===e.id&&(document.querySelector(n).textContent=`Delete from ${document.querySelector(n).textContent.split(" ")[2]}`)}}const p="https://api.themoviedb.org/3/",v="afc22cf5c573169849cabd6217d3b7d3";let g="",b=1,f=1,y=!1;const _=document.querySelector(".header__input"),h=document.querySelector(".search-btn"),S=document.querySelector(".header__form"),L=document.querySelector(".movie-list"),q=document.querySelector("#modal-btn"),w=document.querySelectorAll(".pagination-btn"),x=document.querySelector(".pagination-btn__main"),E=document.querySelector(".pagination-btn__arrow-left"),I=document.querySelector(".pagination-btn__arrow-right"),N=document.querySelector(".pagination-list"),k=document.querySelector(".pagination"),C=document.querySelector(".loader");function $(e){return`${p}trending/movie/week?api_key=${v}&page=${e}`}function M(e,t){return`${p}search/movie?api_key=${v}&query=${e.trim()}&page=${t}`}function T(e){fetch(e).then((e=>e.json())).then((e=>{console.log(e),F(void 0===e.results||e.results.length<1),0!==e.results.length&&(C.classList.add("is-hidden__spinner"),k.classList.remove("is-stealth"),L.innerHTML="",f=e.total_pages,function(e,t){w[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?w[1].textContent=1:Number.parseInt(e)-3>0?w[1].textContent="...":w[1].textContent="";w[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",w[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",x.textContent=Number.parseInt(e),w[5].textContent=Number.parseInt(e)+1<=Number.parseInt(t)?Number.parseInt(e)+1:"",w[6].textContent=Number.parseInt(e)+2<=Number.parseInt(t)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(t)?w[7].textContent=Number.parseInt(t):Number.parseInt(e)+3<=Number.parseInt(t)?w[7].textContent="...":w[7].textContent="";w[8].textContent=Number.parseInt(e)+4<=Number.parseInt(t)?Number.parseInt(t):"",w[5].textContent?I.classList.remove("disabled"):I.classList.add("disabled");w[3].textContent?E.classList.remove("disabled"):E.classList.add("disabled")}(b,f),L.insertAdjacentHTML("beforeend",function(e){return e.results.map((({poster_path:e,id:t,title:n,genre_ids:o,release_date:r})=>`<li class="movie-item">\n                    <img class="movie-img" src="${D(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${function(e){return e.length<1?"Unknown genre":e.length>2?e.slice(0,2).map((e=>{for(let t=0;t<i.genres.length;t+=1)if(i.genres[t].id===e)return i.genres[t].name})).join(", ")+", others...":e.map((e=>{for(let t=0;t<i.genres.length;t+=1)if(i.genres[t].id===e)return i.genres[t].name})).join(", ")}(o)} | ${j(r)}</p>\n                </li>`)).join("")}(e)))})).catch((e=>console.log(e)))}S.addEventListener("submit",(e=>{e.preventDefault()})),T($(b)),h.addEventListener("click",(function(e){F(g.trim().length<1)&&(b=1,y=!0,C.classList.remove("is-hidden__spinner"),T(M(g,b)))})),_.addEventListener("input",(function(e){g=e.currentTarget.value})),L.addEventListener("click",(async function(e){if(console.log(e),"IMG"!==e.target.nodeName)return;document.querySelector(".drop-box").classList.remove("drop-box--is-hidden"),d.classList.add("is-hidden");let t=`${p}movie/${e.target.dataset.id}?api_key=${v}`;await fetch(t).then((e=>e.json())).then((e=>{console.log(e),document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return`<img class="modal__img" src="${D(e.poster_path)}" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">${e.title}</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">${e.vote_average}</span> / <span class="movie-votes__sec">${e.vote_count}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">${e.popularity}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">${e.original_title}</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">${c(e.genres)}</span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">${e.overview}</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn" type="button">Add to Watched</button>\n                        </li>\n                        <li class="modal-btns__item">\n                            <button class="button add-queue-btn" type="button">Add to queue</button>\n                        </li>\n                    </ul>\n                </div>`}(e)),document.querySelector("body").classList.add("overflow-hidden"),m(e,"watchedMoviesStorage",".add-watched-btn"),m(e,"queueMoviesStorage",".add-queue-btn"),u(e,"watchedMoviesStorage",".add-watched-btn"),u(e,"queueMoviesStorage",".add-queue-btn")})).catch((e=>console.log(e))),a=document.querySelector(".add-watched-btn"),s=document.querySelector(".add-queue-btn"),console.log(a),console.log(s)})),q.addEventListener("click",(()=>l())),document.addEventListener("keydown",(e=>{"Escape"===e.code&&l()})),document.querySelector(".drop-box").addEventListener("click",(e=>{document.querySelector(".modal").contains(e.target)||l()})),E.addEventListener("click",(()=>{b<=1||(b-=1,H())})),I.addEventListener("click",(()=>{f<=b||(b=Number.parseInt(b)+1,H())})),N.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&(b=e.target.textContent,H())}));let A=0;const O=document.querySelector(".button-up");function D(e){let t=new Image;t.src=r("a79Io");let n=`https://image.tmdb.org/t/p/w300${e}`;return null===e&&(n=t.src),n}function j(e){let t="Unknown date";return e&&(t=e.slice(0,4)),t}function F(e){return e?(document.querySelector(".not-found-notification").classList.remove("disabled"),C.classList.add("is-hidden__spinner")):document.querySelector(".not-found-notification").classList.add("disabled"),document.querySelector(".not-found-notification").classList.contains("disabled")}function H(){T(y?M(g,b):$(b)),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){let e=window.scrollY;e<A?O.classList.add("is-hidden"):O.classList.remove("is-hidden"),A=e}));const J=document.querySelector(".authorization"),R=document.querySelector(".auth-modal"),U=document.querySelector("#auth-modal-btn"),B=document.querySelector(".registration"),W=document.querySelector("#registr-modal"),P=document.querySelector("#registr-modal-btn"),V=document.querySelector(".auth-modal__box"),X=document.querySelector(".registr-modal__box"),G=document.querySelector("body");function z(){R.classList.remove("open"),G.classList.remove("overflow-hidden"),document.removeEventListener("keydown",Q),U.removeEventListener("click",z),V.removeEventListener("click",K)}function K(e){e.currentTarget===e.target&&z()}function Y(){W.classList.remove("open"),G.classList.remove("overflow-hidden"),P.removeEventListener("click",Y),X.removeEventListener("click",Z)}function Z(e){e.currentTarget===e.target&&Y()}function Q(e){"Escape"===e.code&&(z(),Y())}J.addEventListener("click",(function(e){e.preventDefault(),R.classList.add("open"),G.classList.add("overflow-hidden"),document.addEventListener("keydown",Q),U.addEventListener("click",z),V.addEventListener("click",K)})),B.addEventListener("click",(function(e){e.preventDefault(),R.classList.remove("open"),W.classList.add("open"),P.addEventListener("click",Y),X.addEventListener("click",Z)})),(()=>{const e={openModalBtn:document.querySelector("[modal-developers-open]"),closeModalBtn:document.querySelector("[modal-developers-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden__developers")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&t()}))})();
//# sourceMappingURL=index.4a535bb1.js.map
