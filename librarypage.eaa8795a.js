(()=>{const e={openModalBtn:document.querySelector("[modal-developers-open]"),closeModalBtn:document.querySelector("[modal-developers-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden__developers")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}))})();document.querySelector(".info").classList.remove("is-hidden");
//# sourceMappingURL=librarypage.eaa8795a.js.map
