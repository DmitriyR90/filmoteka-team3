function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("a79Io",(function(e,t){e.exports=new URL(r("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"5FICj":"librarypage.752dae12.js","iHCDC":"noposter.751b8d89.jpg","8mGr4":"index.edfb7e63.js"}')),r("hIzJZ");var o=r("25RCP"),s=r("9jUAk"),a=r("amyG6");(0,o.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"});const c=(0,s.getFirestore)(),l=(0,a.getAuth)(),u=document.querySelector(".info"),d=document.querySelector(".movie-list"),f=document.querySelector(".queue-btn"),g=document.querySelector(".watched-btn");function m(e){e.target===g?(g.classList.add("active-btn"),f.classList.remove("active-btn")):e.target===f&&(g.classList.remove("active-btn"),f.classList.add("active-btn"));const t=e.target.id;(0,a.onAuthStateChanged)(l,(e=>{if(e){p(e.uid).then((e=>e)).then((e=>{const n=e[t];console.log(n),b(n)}))}else console.log("user is logout")}))}async function p(e){const t=await(0,s.getDoc)((0,s.doc)(c,"users",`${e}`));if(t.exists()){return t.data()}}function b(e){d.innerHTML="",e.length<1?u.classList.remove("is-stealth"):function(e){const t=e.map((({img:e,id:t,title:n,genres:i,release_date:o})=>`<li class="movie-item">\n                    <img class="movie-img" src="${function(e){let t=new Image;t.src=r("a79Io");let n=e;null!==e&&""!==e||(n=t.src);return n}(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${function(e){if(""===e)return"Unknown genre";if(e.includes(",")){const t=e.split(",");return t.length>2?t.slice(0,2).join(", ")+", others...":t.join(", ")}return e}(i)} | ${function(e){let t="Unknown date";e&&(t=e.slice(0,4));return t}(o)}</p>\n                </li>`)).join("");d.insertAdjacentHTML("beforeend",t)}(e)}g.classList.add("active-btn"),f.classList.remove("active-btn"),(0,a.onAuthStateChanged)(l,(e=>{e?p(e.uid).then((e=>e)).then((e=>{b(e.filmsWatched)})):console.log("user is logout")})),f.addEventListener("click",m),g.addEventListener("click",m);
//# sourceMappingURL=librarypage.752dae12.js.map
