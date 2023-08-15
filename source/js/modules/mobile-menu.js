const menuToggleButton = document.querySelector(".header__mob-menu-button");
const menuOpenIcon = document.querySelector(".header__mob-menu-icon-burger");
const menuCloseIcon = document.querySelector(".header__mob-menu-icon-cross");
const menuWrapper = document.querySelector(".header__positioning-wrapper");

export const handleMobileMenu = () => {
  menuToggleButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("header__positioning-wrapper--mob-open");
    menuOpenIcon.classList.toggle("header__mob-menu-icon-burger--closed");
    menuCloseIcon.classList.toggle("header__mob-menu-icon-cross--opened");
  });
};
