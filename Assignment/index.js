document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();

  var toastContainer = document.getElementById("toastContainer");
  toastContainer.classList.add("show");

  setTimeout(function () {
    document.getElementById("contactForm").reset();
    toastContainer.classList.remove("show");
  }, 1000);
});

gsap.from(".home", 1, {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 0.5,
});

function animateHomeLink() {
  gsap.from("#home", 1, {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: 0.5,
  });
}
document
  .querySelector("a[href='#home']")
  .addEventListener("click", animateHomeLink);

function animateAboutLink() {
  gsap.from("#about", {
    opacity: 0,
    duration: 1,
    x: -50,
    delay: 0.5,
  });
}
document
  .querySelector("a[href='#about']")
  .addEventListener("click", animateAboutLink);

function animateGallery() {
  gsap.from("#gallery", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: 0.8,
  });
}
document
  .querySelector("a[href='#gallery']")
  .addEventListener("click", animateGallery);

function animateContact() {
  gsap.from("#contact", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: 0.8,
  });
}
document
  .querySelector("a[href='#contact']")
  .addEventListener("click", animateContact);

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
backToTopButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
