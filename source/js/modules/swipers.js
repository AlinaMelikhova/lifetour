import Swiper from "../vendor/swiper.js";

const initHeroSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-hero", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    speed: 300,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

const initToursSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-tours", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--tours",
      prevEl: ".swiper-button-prev--tours",
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
};

const initEducationSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-education", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--education",
      prevEl: ".swiper-button-prev--education",
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
};

const initReviewSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-review", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--review",
      prevEl: ".swiper-button-prev--review",
    },

    breakpoints: {
      1200: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
};

const initBenefitsSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-benefits", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 300,
    initialSlide: 2,

    navigation: {
      nextEl: ".swiper-button-next--benefits",
      prevEl: ".swiper-button-prev--benefits",
    },

    breakpoints: {
      1200: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
};

const initGalleruSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-gallery", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--gallery",
      prevEl: ".swiper-button-prev--gallery",
    },

    breakpoints: {
      1200: {
        slidesPerView: "auto",
        spaceBetween: 5,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 18,
      },
    },
  });
};

export const initSwipers = () => {
  initHeroSwiper();
  initToursSwiper();
  initEducationSwiper();
  initReviewSwiper();
  initBenefitsSwiper();
  initGalleruSwiper();
};
