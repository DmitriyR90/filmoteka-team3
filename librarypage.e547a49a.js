function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("a79Io",(function(e,t){e.exports=new URL(r("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"eWFvC":"librarypage.e547a49a.js","iHCDC":"noposter.751b8d89.jpg"}')),(()=>{const e={openModalBtn:document.querySelector("[modal-developers-open]"),closeModalBtn:document.querySelector("[modal-developers-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden__developers")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&t()}))})();let i=JSON.parse(localStorage.getItem("watchedMoviesStorage")),l=JSON.parse(localStorage.getItem("queueMoviesStorage"));const s=document.querySelector(".info"),c=document.querySelector(".movie-list"),a=document.querySelector(".queue-btn"),d=document.querySelector(".watched-btn");function u(){d.classList.add("active-btn"),a.classList.remove("active-btn"),c.innerHTML="",i.length<1?s.classList.remove("is-stealth"):function(){const e=i.map((({img:e,id:t,title:n,genres:o,release_date:r})=>`<li class="movie-item">\n                    <img class="movie-img" src="${f(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${m(o)} | ${g(r)}</p>\n                </li>`)).join("");c.insertAdjacentHTML("beforeend",e)}()}function f(e){let t=new Image;t.src=r("a79Io");let n=e;return null!==e&&""!==e||(n=t.src),n}function m(e){if(""===e)return"Unknown genre";if(e.includes(",")){const t=e.split(",");return t.length>2?t.slice(0,2).join(", ")+", others...":t.join(", ")}return e}function g(e){let t="Unknown date";return e&&(t=e.slice(0,4)),t}console.log(a),console.log(d),u(),a.addEventListener("click",(function(){d.classList.remove("active-btn"),a.classList.add("active-btn"),c.innerHTML="",l.length<1?s.classList.remove("is-stealth"):function(){const e=l.map((({img:e,id:t,title:n,genres:o,release_date:r})=>`<li class="movie-item">\n                    <img class="movie-img" src="${f(e)}" data-id="${t}" alt="${n}" width="280">\n                    <h2 class="movie-title">${n}</h2>\n                    <p class="movie-description">${m(o)} | ${g(r)}</p>\n                </li>`)).join("");c.insertAdjacentHTML("beforeend",e)}()})),d.addEventListener("click",u);
//# sourceMappingURL=librarypage.e547a49a.js.map
