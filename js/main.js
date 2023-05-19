let imgs = document.querySelectorAll(".projects img");
let header = document.querySelector(".header");
let about =  document.querySelector(".section")

imgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = "0.1";
    }
    header.style.opacity = "0.1";
    about.style.opacity = "0.1";
    img.style.opacity = "1";
  });
  img.addEventListener("mouseleave", () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = "1";
    }
    header.style.opacity = "1";
    about.style.opacity = "1";
  });
});


