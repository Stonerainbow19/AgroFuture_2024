let preloader  = document.getElementById("preloader");
let loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  preloader.classList.remove("preloader");
  loader.classList.remove("loader");
  }, 1280);
