!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var a={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},s=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("7raIt",(function(e,t){e.exports=a("aNJCr").getBundleURL("6rRUj")+a("iE7OH").resolve("iXtly")})),a.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var s={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),s[e]=t),t}})),a("iE7OH").register(JSON.parse('{"6rRUj":"librarypage.0780b95b.js","iXtly":"noposter.751b8d89.jpg","5UbS1":"index.44f0d4c0.css","iLoYJ":"index.398bedef.js"}'));var o=a("bpxeT"),r=a("2TvXO");a("jHF6Y");var c=a("6Urw1"),l=a("c69b4"),u=a("3SEMc"),d=a("k6tlf");t(d).settings({timeout:2e3});(0,c.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});var m=(0,l.getFirestore)(),v=(0,u.getAuth)(),f=document.querySelector(".info"),p=document.querySelector(".movie-list"),b=document.querySelector(".queue-btn"),h=document.querySelector(".watched-btn"),_=document.querySelector(".loader"),g=document.querySelectorAll(".pagination-btn"),L=document.querySelector(".pagination-btn__main"),y=document.querySelector(".pagination-btn__arrow-left"),x=document.querySelector(".pagination-btn__arrow-right"),S=document.querySelector(".pagination-list"),w=document.querySelector(".pagination"),N=1,I=1;function q(){h.classList.add("active-btn"),b.classList.remove("active-btn"),(0,u.onAuthStateChanged)(v,(function(e){if(e)C(e.uid).then((function(e){return e})).then((function(e){var t=e.filmsWatched;if(0===t.length)return w.classList.add("is-stealth"),f.classList.remove("is-stealth"),void A(t);if(1!==(I=Math.ceil(t.length/20))){var n=20*N,i=n-20;return A(t=e.filmsWatched.slice(i,n)),w.classList.remove("is-stealth"),void j(N,I)}A(t),N=1,w.classList.remove("is-stealth"),j(N,I)}))}))}function E(e){N=1,_.classList.remove("is-hidden__spinner"),e.target===h?(_.classList.add("is-hidden__spinner"),h.classList.add("active-btn"),b.classList.remove("active-btn")):e.target===b&&(h.classList.remove("active-btn"),b.classList.add("active-btn"),_.classList.add("is-hidden__spinner"));var t=e.target.id;(0,u.onAuthStateChanged)(v,(function(e){if(e)C(e.uid).then((function(e){return e})).then((function(e){var n=e[t];if(0===n.length)return w.classList.add("is-stealth"),f.classList.remove("is-stealth"),void T(n);if(1===(I=Math.ceil(n.length/20)))T(n),N=1,w.classList.remove("is-stealth"),j(N,I);else{var i=20*N,s=i-20;T(n=e[t].slice(s,i)),w.classList.remove("is-stealth"),j(N,I)}}));else console.log("user is logout")}))}function C(e){return k.apply(this,arguments)}function k(){return(k=t(o)(t(r).mark((function e(n){var i,s;return t(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.getDoc)((0,l.doc)(m,"users","".concat(n)));case 2:if(!(i=e.sent).exists()){e.next=6;break}return s=i.data(),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){if(p.innerHTML="",e.length<1)return p.innerHTML="",f.classList.remove("is-stealth"),void w.classList.add("is-stealth");f.classList.add("is-stealth"),H(e),w.classList.remove("is-stealth"),j(N,I)}function H(e){var t;t=e.map((function(e){var t=e.img,n=e.id,i=e.title,s=e.genres,o=e.date,r=e.vote_average;return'<li class="movie-item">\n                    <img class="movie-img" src="'.concat(function(e){var t=new Image;t.src=a("7raIt");var n=e;null!==e&&""!==e||(n=t.src);return n}(t),'" data-id="').concat(n,'" alt="').concat(i,'" width="280">\n                    <h2 class="movie-title">').concat(i,'</h2>\n                    <p class="movie-description">').concat(function(e){if(""===e)return"Unknown genre";if(e.includes(",")){var t=e.split(",");return t.length>2?t.slice(0,2).join(", ")+", others...":t.join(", ")}return e}(s)," | ").concat(o,' <span class="modal-votes">').concat(r,"</span></p>\n                </li>")})).join(""),p.insertAdjacentHTML("beforeend",t)}function A(e){p.innerHTML="",0===e.length?f.classList.remove("is-stealth"):(f.classList.add("is-stealth"),H(e))}function j(e,t){g[0].textContent=Number.parseInt(e)-4>0?1:"",Number.parseInt(e)-3==1?g[1].textContent=1:Number.parseInt(e)-3>0?g[1].textContent="...":g[1].textContent="",g[2].textContent=Number.parseInt(e)-2>0?Number.parseInt(e)-2:"",g[3].textContent=Number.parseInt(e)-1>0?Number.parseInt(e)-1:"",L.textContent=Number.parseInt(e),g[5].textContent=Number.parseInt(e)+1<=Number.parseInt(t)?Number.parseInt(e)+1:"",g[6].textContent=Number.parseInt(e)+2<=Number.parseInt(t)?Number.parseInt(e)+2:"",Number.parseInt(e)+3===Number.parseInt(t)?g[7].textContent=Number.parseInt(t):Number.parseInt(e)+3<=Number.parseInt(t)?g[7].textContent="...":g[7].textContent="",g[8].textContent=Number.parseInt(e)+4<=Number.parseInt(t)?Number.parseInt(t):"",g[5].textContent?x.classList.remove("disabled"):x.classList.add("disabled"),g[3].textContent?y.classList.remove("disabled"):y.classList.add("disabled")}function D(){if(h.classList.contains("active-btn"))return q(),void window.scrollTo({top:0,behavior:"smooth"});M(),window.scrollTo({top:0,behavior:"smooth"})}function M(){h.classList.remove("active-btn"),b.classList.add("active-btn"),(0,u.onAuthStateChanged)(v,(function(e){if(e)C(e.uid).then((function(e){return e})).then((function(e){var t=e.filmsQueue;if(0===t.length)return w.classList.add("is-stealth"),f.classList.remove("is-stealth"),void A(t);if(1!==(I=Math.ceil(t.length/20))){var n=20*N,i=n-20;return A(t=e.filmsQueue.slice(i,n)),w.classList.remove("is-stealth"),void j(N,I)}A(t),N=1,w.classList.remove("is-stealth"),j(N,I)}));else console.log("user is logout")}))}function O(){return(O=t(o)(t(r).mark((function e(n){var i;return t(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.target.dataset.id,"IMG"===n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:document.querySelector(".modal-thumb").innerHTML="",document.querySelector(".drop-box").classList.remove("drop-box--is-hidden"),document.querySelector(".button-up").classList.add("is-hidden"),(0,u.onAuthStateChanged)(v,(function(e){if(e){var n=e.uid;C(n).then((function(e){return e})).then((function(e){if(h.classList.contains("active-btn")){var s=e.filmsWatched.find((function(e){return e.id===Number(i)}));R(s);var a=document.querySelector("#filmsWatchedDelete");a.addEventListener("click",(function(){(0,l.updateDoc)((0,l.doc)(m,"users",n),{filmsWatched:(0,l.arrayRemove)(s)}),a.disabled=!0,a.classList.add("button-disabled"),t(d).success({title:"DELETE",message:"Successfully delete record!"}),q()}))}else if(b.classList.contains("active-btn")){var o=e.filmsQueue.find((function(e){return e.id===Number(i)}));U(o);var r=document.querySelector("#filmsQueueDelete");r.addEventListener("click",(function(){(0,l.updateDoc)((0,l.doc)(m,"users",n),{filmsQueue:(0,l.arrayRemove)(o)}),r.disabled=!0,r.classList.add("button-disabled"),t(d).success({title:"DELETE",message:"Successfully delete record!"}),M()}))}}))}else console.log("user is logout")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return'<img class="modal__img" src="'.concat(e.img,'" alt="" width="240">\n                <div class="modal__description-thumb">\n                    <h2 class="modal__title">').concat(e.title,'</h2>\n                    <ul class="movie-data">\n                        <li>\n                            <ul class="movie-data__name">\n                                <li>Vote / Votes</li>\n                                <li>Popularity</li>\n                                <li>Original Title</li>\n                                <li>Genre</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class="movie-data__content">\n                                <li class="movie-data__item">\n                                    <span class="movie-votes__first">').concat(e.vote_average,'</span> / <span class="movie-votes__sec">').concat(e.vote_count,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-popularity__item">').concat(e.popularity,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-orig-title__item">').concat(e.original_title,'</span>\n                                </li>\n                                <li class="movie-data__item">\n                                    <span class="movie-genre__item">\n                                      ').concat(e.genres,'\n                                    </span>\n                                </li>\n                            </ul>\n                        </li>  \n                    </ul>\n                    \n                    <p class="movie-about">About</p>\n                    <p class="movie-about-text">').concat(e.overview,'</p>\n                    <ul class="modal-btns">\n                        <li class="modal-btns__item">\n                            <button class="button add-watched-btn delete" type="button" id="filmsWatchedDelete">Delete from Watched</button>\n                        </li>\n                        \n                    </ul>\n                </div>')}(e)),document.querySelector("body").classList.add("overflow-hidden")}function U(e){document.querySelector(".modal-thumb").insertAdjacentHTML("beforeend",function(e){return'<img class="modal__img" src="'.concat(e.img,'" alt="" width="240">\n              <div class="modal__description-thumb">\n                  <h2 class="modal__title">').concat(e.title,'</h2>\n                  <ul class="movie-data">\n                      <li>\n                          <ul class="movie-data__name">\n                              <li>Vote / Votes</li>\n                              <li>Popularity</li>\n                              <li>Original Title</li>\n                              <li>Genre</li>\n                          </ul>\n                      </li>\n                      <li>\n                          <ul class="movie-data__content">\n                              <li class="movie-data__item">\n                                  <span class="movie-votes__first">').concat(e.vote_average,'</span> / <span class="movie-votes__sec">').concat(e.vote_count,'</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-popularity__item">').concat(e.popularity,'</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-orig-title__item">').concat(e.original_title,'</span>\n                              </li>\n                              <li class="movie-data__item">\n                                  <span class="movie-genre__item">\n                                    ').concat(e.genres,'\n                                  </span>\n                              </li>\n                          </ul>\n                      </li>  \n                  </ul>\n                  \n                  <p class="movie-about">About</p>\n                  <p class="movie-about-text">').concat(e.overview,'</p>\n                  <ul class="modal-btns">\n                      <li class="modal-btns__item">\n                          <button class="button add-watched-btn delete" type="button" id="filmsQueueDelete">Delete from queue</button>\n                      </li>\n                  </ul>\n              </div>')}(e)),document.querySelector("body").classList.add("overflow-hidden")}function W(){document.querySelector(".drop-box").classList.add("drop-box--is-hidden"),document.querySelector("body").classList.remove("overflow-hidden")}q(),_.classList.add("is-hidden__spinner"),b.addEventListener("click",E),h.addEventListener("click",E),y.addEventListener("click",(function(){N<=1||(N-=1,D())})),x.addEventListener("click",(function(){I<=N||(N=Number.parseInt(N)+1,D())})),S.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&e.target.textContent&&"..."!==e.target.textContent&&(N=e.target.textContent,D())})),p.addEventListener("click",(function(e){return O.apply(this,arguments)})),document.querySelector("#modal-btn").addEventListener("click",(function(){return W()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&W()})),document.querySelector(".drop-box").addEventListener("click",(function(e){document.querySelector(".modal").contains(e.target)||W()}))}();
//# sourceMappingURL=librarypage.0780b95b.js.map
