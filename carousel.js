const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".prev-button");
const rightArrow = document.querySelector(".next-button");
const images = document.querySelectorAll(".carousel-img");
const pageButtons = document.querySelectorAll(".page-button");

let imageIndex = 0;
let intervalId = null;

const INTERVAL_MILLISECONDS = 5000;
const FIRST_PAGE_INDEX = 0;
const LAST_PAGE_INDEX = images.length - 1;

const changeImagePage = () => {
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const toggleActiveDotStyle = () => {
  pageButtons.forEach((button, index) => {
    if (index === imageIndex) {
      button.classList.add("page-button-active");
    } else {
      button.classList.remove("page-button-active");
    }
  });
};

const increaseActiveImage = () => {
  if (imageIndex === LAST_PAGE_INDEX) {
    imageIndex = FIRST_PAGE_INDEX;
  } else {
    imageIndex++;
  }
  toggleActiveDotStyle();
  changeImagePage();
};

const decreaseActiveImage = () => {
  if (imageIndex === FIRST_PAGE_INDEX) {
    imageIndex = LAST_PAGE_INDEX;
  } else {
    imageIndex--;
  }
  toggleActiveDotStyle();
  changeImagePage();
};

const switchActiveImage = (activeDot) => {
  imageIndex = activeDot;
  toggleActiveDotStyle();
  changeImagePage();
};

const autoSlideImage = () => {
  intervalId = setInterval(() => {
    increaseActiveImage();
  }, INTERVAL_MILLISECONDS);
};

const pauseAutoSlideImage = () => {
  clearInterval(intervalId);
};

pageButtons.forEach((pageButton, pageIndex) => {
  pageButton.addEventListener("click", () => {
    switchActiveImage(pageIndex);
  });
});

// wrapper.addEventListener("mouseover", pauseAutoSlideImage);
// wrapper.addEventListener("mouseleave", autoSlideImage);
leftArrow.addEventListener("click", decreaseActiveImage);
rightArrow.addEventListener("click", increaseActiveImage);
autoSlideImage();
