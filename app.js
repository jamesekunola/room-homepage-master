// Selecting necessary HTML elements
const hamburgerBtn = document.querySelector(".hamburgar-icon"),
  closeBtn = document.querySelector(".close-btn"),
  mobileNavbar = document.querySelector(".nav--links"),
  prevBtn = document.querySelector(".prev-img"),
  nextBtn = document.querySelector(".next-img"),
  overlay = document.querySelector(".overlay");

// Initializing the image counter
let imgCounter = 0;

// Function to show mobile navigation menu
function showNav() {
  mobileNavbar.classList.add("visible");
  overlay.classList.add("show");
  document.body.style.overflowY = "hidden";
}

// Function to hide mobile navigation menu
function hideNav() {
  mobileNavbar.classList.remove("visible");
  overlay.classList.remove("show");
  document.body.style.overflowY = "auto";
}

// Function to set initial position of images in slideshow
function positionSlidesImages(images) {
  slides = document.querySelectorAll(images);
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });
}

// Function to render the initial position of the slideshow images
function renderSlide() {
  images = window.innerWidth >= 759 ? ".desktop-slide" : " .mobile-slide";
  positionSlidesImages(images);
}

// Function to update the position of images in slideshow on window resize
function handleResize() {
  images = window.innerWidth >= 759 ? ".desktop-slide" : " .mobile-slide";
  positionSlidesImages(images);
  goToNewImgPosition();
}

function updateSlideImageOnResize() {
  window.addEventListener("resize", handleResize);
}

// Function to update the position of the slideshow images when called
function goToNewImgPosition() {
  slides.forEach((slide) => {
    slide.style.left = `-${imgCounter * 100}%`;
  });
}

// Function to display the next image in the slideshow
function displayNextImage() {
  // console.log("rock and roll");
  imgCounter++;
  if (imgCounter == slides.length) {
    imgCounter = 0;
  }
  goToNewImgPosition();
}

// Function to display the previous image in the slideshow
function displayPrevImage() {
  imgCounter--;
  if (imgCounter < 0) {
    imgCounter = slides.length - 1;
  }
  goToNewImgPosition();
}

// Function to move the slideshow images automatically every 10 seconds
function moveSlideAutomatically() {
  setInterval(() => {
    imgCounter++;
    if (imgCounter == slides.length) {
      imgCounter = 0;
    }
    goToNewImgPosition();
  }, 10000);
}

// Event listener for when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Event listener for showing the mobile navigation menu when the hamburger icon is clicked
  hamburgerBtn.addEventListener("click", showNav);

  // Event listener for hiding the mobile navigation menu when the close button is clicked
  closeBtn.addEventListener("click", hideNav);

  // Render the slideshow images
  renderSlide();

  // Update the position of slideshow images on window resize
  updateSlideImageOnResize();

  // Move the slideshow images automatically
  moveSlideAutomatically();

  // click event to display next slideshow
  nextBtn.addEventListener("click", displayNextImage);

  // click event to display prev slideshow
  prevBtn.addEventListener("click", displayPrevImage);
});
