!function(){var e;e=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystery"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}]}');var n="https://api.themoviedb.org/3/",t="afc22cf5c573169849cabd6217d3b7d3",a="",o=1,i=1,r=!1,c=document.querySelector(".header__input"),s=document.querySelector(".search-btn"),d=document.querySelector(".movie-list"),l=document.querySelector(".modal__button"),m=document.querySelectorAll(".pagination-btn"),u=document.querySelector(".pagination-btn__main"),p=document.querySelector(".pagination-btn__arrow-left"),v=document.querySelector(".pagination-btn__arrow-right"),b=document.querySelector(".pagination-list"),_=document.querySelector(".loading-container");function g(e){return"".concat(n,"trending/movie/week?api_key=").concat(t,"&page=").concat(e)}function f(e,a){return"".concat(n,"search/movie?api_key=").concat(t,"&query=").concat(e.trim(),"&page=").concat(a)}function y(n){fetch(n).then((function(e){return e.json()})).then((function(n){console.log(n),L(void 0===n.results||n.results.length<1),0!==n.results.length&&(d.innerHTML="",i=n.total_pages,function(e,n){m[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?m[1].textContent=1:Number.parseInt(e)-3>0?m[1].textContent="...":m[1].textContent="";m[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",m[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",u.textContent=Number.parseInt(e),m[5].textContent=Number.parseInt(e)+1<=Number.parseInt(n)?Number.parseInt(e)+1:"",m[6].textContent=Number.parseInt(e)+2<=Number.parseInt(n)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(n)?m[7].textContent=Number.parseInt(n):Number.parseInt(e)+3<=Number.parseInt(n)?m[7].textContent="...":m[7].textContent="";m[8].textContent=Number.parseInt(e)+4<=Number.parseInt(n)?Number.parseInt(n):"",m[5].textContent?v.classList.remove("disabled"):v.classList.add("disabled");m[3].textContent?p.classList.remove("disabled"):p.classList.add("disabled")}(o,i),_.classList.add("is-hidden__spinner"),d.insertAdjacentHTML("beforeend",function(n){return n.results.map((function(n){var t=n.poster_path,a=n.id,o=n.title,i=n.genre_ids,r=n.release_date;return'<li class="movie-item">\n                    <img class="movie-img" src="'.concat(h(t),'" data-id="').concat(a,'" alt="').concat(o,'" width="280">\n                    <h2 class="movie-title">').concat(o,'</h2>\n                    <p class="movie-description">').concat(function(n){return n.length<1?"Unknown genre":n.length>2?n.slice(0,2).map((function(n){for(var t=0;t<e.genres.length;t+=1)if(e.genres[t].id===n)return e.genres[t].name})).join(", ")+", others...":n.map((function(n){for(var t=0;t<e.genres.length;t+=1)if(e.genres[t].id===n)return e.genres[t].name})).join(", ")}(i)," | ").concat(function(e){var n="Unknown date";e&&(n=e.slice(0,4));return n}(r),"</p>\n                </li>")})).join("")}(n)))})).catch((function(e){return console.log(e)}))}function h(e){var n="https://image.tmdb.org/t/p/w300".concat(e);return null===e&&(n="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"),n}function L(e){return e?(document.querySelector(".not-found-notification").classList.remove("disabled"),_.classList.add("is-hidden__spinner")):document.querySelector(".not-found-notification").classList.add("disabled"),document.querySelector(".not-found-notification").classList.contains("disabled")}function N(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector(".modal-thumb").innerHTML="",document.querySelector("body").classList.remove("overflow-hidden")}function S(){y(r?f(a,o):g(o)),window.scrollTo({top:0,behavior:"smooth"})}_.classList.add("is-hidden__spinner"),y(g(o)),s.addEventListener("click",(function(e){L(a.trim().length<1)&&(o=1,r=!0,_.classList.remove("is-hidden__spinner"),y(f(a,o)))})),c.addEventListener("input",(function(e){a=e.currentTarget.value})),d.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;document.querySelector(".drop-box").classList.remove("drop-box--is-hidden");var a="".concat(n,"movie/").concat(e.target.dataset.id,"?api_key=").concat(t);fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return'<img class="modal__img" src="'.concat(h(e.poster_path),'" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">').concat(e.title,'</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">').concat(e.vote_average,'</span> / <span class="movie-votes__sec">').concat(e.vote_count,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">').concat(e.popularity,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">').concat(e.original_title,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">').concat((n=e.genres,n.map((function(e){return e.name})).join(", ")),'</span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">').concat(e.overview,'</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn" type="button">Add to Watched</button>\n                        </li>\n                        <li class="modal-btns__item">\n                            <button class="button add-queue-btn" type="button">Add to queue</button>\n                        </li>\n                    </ul>\n                </div>');var n}(e)),document.querySelector("body").classList.add("overflow-hidden")})).catch((function(e){return console.log(e)}))})),l.addEventListener("click",(function(){return N()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&N()})),document.querySelector(".drop-box").addEventListener("click",(function(e){document.querySelector(".modal").contains(e.target)||N()})),p.addEventListener("click",(function(){o<=1||(o-=1,S())})),v.addEventListener("click",(function(){i<=o||(o=Number.parseInt(o)+1,S())})),b.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&(o=e.target.textContent,S())})),function(){var e={openModalBtn:document.querySelector("[modal-developers-open]"),closeModalBtn:document.querySelector("[modal-developers-close]"),modal:document.querySelector("[data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}()}();
//# sourceMappingURL=index.4e77abf6.js.map
