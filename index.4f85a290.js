!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("7uOvd",(function(e,t){e.exports=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iXtly")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.4f85a290.js","iXtly":"noposter.751b8d89.jpg","6W72L":"index.9d96d969.js","iLoYJ":"index.fefccd89.js"}'));var a;a=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystery"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}]}');var c=i("bpxeT"),s=i("hKHmD"),u=i("2TvXO"),d=i("6Urw1"),l=i("c69b4"),m=i("3SEMc"),p=(c=i("bpxeT"),u=i("2TvXO"),d=i("6Urw1"),l=i("c69b4"),m=i("3SEMc"),document.querySelector("#user-email-reg")),v=document.querySelector("#user-password-reg"),f=document.querySelector("#btn-reg"),b=document.querySelector("#user-email-auth"),h=document.querySelector("#user-password-auth"),g=document.querySelector("#btn-auth"),y=document.querySelector(".library"),_=document.querySelector(".authorization"),L=document.querySelector(".auth-modal"),S=document.querySelector(".registr-modal");_.classList.add("is-stealth"),y.classList.add("is-stealth");(0,d.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});var w=(0,l.getFirestore)(),q=(0,m.getAuth)();function x(e,t){return k.apply(this,arguments)}function k(){return(k=t(c)(t(u).mark((function e(n,r){var o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={email:n,id:r,filmsWatched:[],filmsQueue:[]},e.prev=1,e.next=4,(0,l.setDoc)((0,l.doc)(w,"users","".concat(r)),o,{merge:!0});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function E(){return(E=t(c)(t(u).mark((function e(n){var r,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=b.value,o=h.value,e.prev=3,e.next=6,(0,m.signInWithEmailAndPassword)(q,r,o);case 6:e.sent,y.classList.remove("is-stealth"),_.classList.add("is-stealth"),L.classList.remove("open"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("error");case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function N(){return(N=t(c)(t(u).mark((function e(n){var r,o,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=p.value,o=v.value,e.prev=3,e.next=6,(0,m.createUserWithEmailAndPassword)(q,r,o);case 6:i=e.sent,a=i.user.uid,x(r,a),console.log("new user"),y.classList.remove("is-stealth"),_.classList.add("is-stealth"),S.classList.remove("open"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}f.addEventListener("click",(function(e){return N.apply(this,arguments)})),g.addEventListener("click",(function(e){return E.apply(this,arguments)}));(0,m.onAuthStateChanged)(q,(function(e){e?y.classList.remove("is-stealth"):(_.classList.remove("is-stealth"),console.log("user is logout"))}));(0,d.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});var I,A,C=(0,l.getFirestore)(),T=(0,m.getAuth)(),H=document.querySelector(".button-up");function j(){return(j=t(c)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return document.querySelector(".drop-box").classList.remove("drop-box--is-hidden"),H.classList.add("is-hidden"),r="".concat(M,"movie/").concat(n.target.dataset.id,"?api_key=").concat(W),e.next=7,fetch(r).then((function(e){return e.json()})).then((function(e){function n(n){var r=n.target.id,o={id:e.id,title:e.title,img:ce(e.poster_path),vote_average:e.vote_average,vote_count:e.vote_count,popularity:e.popularity,original_title:e.original_title,genres:F(e.genres),overview:e.overview,date:se(e.release_date)};(0,m.onAuthStateChanged)(T,(function(e){if(e){var n=e.uid;(0,l.updateDoc)((0,l.doc)(C,"users","".concat(n)),t(s)({},r,(0,l.arrayUnion)(o)))}else console.log("user is logout")}))}document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",O(e)),document.querySelector("body").classList.add("overflow-hidden"),I=document.querySelector(".add-watched-btn"),A=document.querySelector(".add-queue-btn"),I.addEventListener("click",n),A.addEventListener("click",n)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector(".modal-thumb").innerHTML="",document.querySelector("body").classList.remove("overflow-hidden"),H.classList.remove("is-hidden")}function O(e){return'<img class="modal__img" src="'.concat(ce(e.poster_path),'" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">').concat(e.title,'</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">').concat(e.vote_average,'</span> / <span class="movie-votes__sec">').concat(e.vote_count,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">').concat(e.popularity,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">').concat(e.original_title,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">').concat(F(e.genres),'</span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">').concat(e.overview,'</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn" type="button" id="filmsWatched">Add to Watched</button>\n                        </li>\n                        <li class="modal-btns__item">\n                            <button class="button add-queue-btn" type="button" id="filmsQueue">Add to queue</button>\n                        </li>\n                    </ul>\n                </div>')}function F(e){return e.map((function(e){return e.name})).join(", ")}var M="https://api.themoviedb.org/3/",W="afc22cf5c573169849cabd6217d3b7d3",U="",z=1,R=1,B=!1,P=document.querySelector(".header__input"),J=document.querySelector(".search-btn"),V=document.querySelector(".header__form"),K=document.querySelector(".movie-list"),Q=document.querySelector("#modal-btn"),X=document.querySelectorAll(".pagination-btn"),Y=document.querySelector(".pagination-btn__main"),G=document.querySelector(".pagination-btn__arrow-left"),Z=document.querySelector(".pagination-btn__arrow-right"),$=document.querySelector(".pagination-list"),ee=document.querySelector(".pagination"),te=document.querySelector(".loader");function ne(e){return"".concat(M,"trending/movie/week?api_key=").concat(W,"&page=").concat(e)}function re(e,t){return"".concat(M,"search/movie?api_key=").concat(W,"&query=").concat(e.trim(),"&page=").concat(t)}function oe(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),ue(void 0===e.results||e.results.length<1),0!==e.results.length&&(te.classList.add("is-hidden__spinner"),ee.classList.remove("is-stealth"),K.innerHTML="",R=e.total_pages,function(e,t){X[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?X[1].textContent=1:Number.parseInt(e)-3>0?X[1].textContent="...":X[1].textContent="";X[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",X[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",Y.textContent=Number.parseInt(e),X[5].textContent=Number.parseInt(e)+1<=Number.parseInt(t)?Number.parseInt(e)+1:"",X[6].textContent=Number.parseInt(e)+2<=Number.parseInt(t)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(t)?X[7].textContent=Number.parseInt(t):Number.parseInt(e)+3<=Number.parseInt(t)?X[7].textContent="...":X[7].textContent="";X[8].textContent=Number.parseInt(e)+4<=Number.parseInt(t)?Number.parseInt(t):"",X[5].textContent?Z.classList.remove("disabled"):Z.classList.add("disabled");X[3].textContent?G.classList.remove("disabled"):G.classList.add("disabled")}(z,R),K.insertAdjacentHTML("beforeend",function(e){return e.results.map((function(e){var t=e.poster_path,n=e.id,r=e.title,o=e.genre_ids,i=e.release_date;return'<li class="movie-item">\n                    <img class="movie-img" src="'.concat(ce(t),'" data-id="').concat(n,'" alt="').concat(r,'" width="280">\n                    <h2 class="movie-title">').concat(r,'</h2>\n                    <p class="movie-description">').concat(function(e){return e.length<1?"Unknown genre":e.length>2?e.slice(0,2).map((function(e){for(var t=0;t<a.genres.length;t+=1)if(a.genres[t].id===e)return a.genres[t].name})).join(", ")+", others...":e.map((function(e){for(var t=0;t<a.genres.length;t+=1)if(a.genres[t].id===e)return a.genres[t].name})).join(", ")}(o)," | ").concat(se(i),"</p>\n                </li>")})).join("")}(e)))})).catch((function(e){return console.log(e)}))}V.addEventListener("submit",(function(e){e.preventDefault()})),oe(ne(z)),J.addEventListener("click",(function(e){ue(U.trim().length<1)&&(z=1,B=!0,te.classList.remove("is-hidden__spinner"),oe(re(U,z)))})),P.addEventListener("input",(function(e){U=e.currentTarget.value})),K.addEventListener("click",(function(e){return j.apply(this,arguments)})),Q.addEventListener("click",(function(){return D()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&D()})),document.querySelector(".drop-box").addEventListener("click",(function(e){document.querySelector(".modal").contains(e.target)||D()})),G.addEventListener("click",(function(){z<=1||(z-=1,de())})),Z.addEventListener("click",(function(){R<=z||(z=Number.parseInt(z)+1,de())})),$.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&(z=e.target.textContent,de())}));var ie=0,ae=document.querySelector(".button-up");function ce(e){var t=new Image;t.src=i("7uOvd");var n="https://image.tmdb.org/t/p/w300".concat(e);return null===e&&(n=t.src),n}function se(e){var t="Unknown date";return e&&(t=e.slice(0,4)),t}function ue(e){return e?(document.querySelector(".not-found-notification").classList.remove("disabled"),te.classList.add("is-hidden__spinner")):document.querySelector(".not-found-notification").classList.add("disabled"),document.querySelector(".not-found-notification").classList.contains("disabled")}function de(){oe(B?re(U,z):ne(z)),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){var e=window.scrollY;e<ie?ae.classList.add("is-hidden"):ae.classList.remove("is-hidden"),ie=e}));var le=document.querySelector(".authorization"),me=document.querySelector(".auth-modal"),pe=document.querySelector("#auth-modal-btn"),ve=document.querySelector(".registration"),fe=document.querySelector("#registr-modal"),be=document.querySelector("#registr-modal-btn"),he=document.querySelector(".auth-modal__box"),ge=document.querySelector(".registr-modal__box"),ye=document.querySelector("body");function _e(){me.classList.remove("open"),ye.classList.remove("overflow-hidden"),document.removeEventListener("keydown",qe),pe.removeEventListener("click",_e),he.removeEventListener("click",Le)}function Le(e){e.currentTarget===e.target&&_e()}function Se(){fe.classList.remove("open"),ye.classList.remove("overflow-hidden"),be.removeEventListener("click",Se),ge.removeEventListener("click",we)}function we(e){e.currentTarget===e.target&&Se()}function qe(e){"Escape"===e.code&&(_e(),Se())}le.addEventListener("click",(function(e){e.preventDefault(),me.classList.add("open"),ye.classList.add("overflow-hidden"),document.addEventListener("keydown",qe),pe.addEventListener("click",_e),he.addEventListener("click",Le)})),ve.addEventListener("click",(function(e){e.preventDefault(),me.classList.remove("open"),fe.classList.add("open"),be.addEventListener("click",Se),ge.addEventListener("click",we)})),i("jHF6Y")}();
//# sourceMappingURL=index.4f85a290.js.map
