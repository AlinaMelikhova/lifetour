const menuToggleButton = document.querySelector(".header__mob-menu-button");
const menuOpenIcon = document.querySelector(".header__mob-menu-icon-burger");
const menuCloseIcon = document.querySelector(".header__mob-menu-icon-cross");
const menuWrapper = document.querySelector(".header__positioning-wrapper");
const pageWrapper = document.querySelector(".page-wrapper");
const heroWrapper = document.querySelector(".hero__container");

export const handleMobileMenu = () => {
  menuToggleButton.addEventListener("click", () => {
    pageWrapper.classList.toggle("page-wrapper--mob-open");
    heroWrapper.classList.toggle("hero__container--mob-open");
    menuWrapper.classList.toggle("header__positioning-wrapper--mob-open");
    menuOpenIcon.classList.toggle("header__mob-menu-icon-burger--closed");
    menuCloseIcon.classList.toggle("header__mob-menu-icon-cross--opened");
  });
};
