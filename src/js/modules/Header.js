export const HeaderInit = () => {
  let header = document.querySelector('header');
  let headerMenu = document.querySelector('.header__menu ');
  let headerNav = document.querySelector('.menu__list');
  let burgerButton = document.querySelector('.menu__burger');
  let desktopMenu = document.querySelector('.desktop-menu');
  let mobileMenu = document.querySelector('.mobile-menu');
  let headerLogo = document.querySelector('.header__logo');
  let menuBtns = document.querySelectorAll('.menu__buttons a');
  let burgerIcons = document.querySelectorAll('.menu__burger img');
  let firstOpen = true;

  burgerButton.addEventListener('click', () => {
    desktopMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    headerLogo.classList.toggle('hidden');
    menuBtns[0].classList.toggle('hidden');
    menuBtns[1].classList.toggle('hidden');
    burgerButton.classList.toggle('show');
    headerMenu.classList.toggle('marginLeftAuto');
    if (firstOpen) {
      let heightMobileMenuLinks = [
        ...document.querySelectorAll('.mobile-menu__links'),
      ].map((item) => item.clientHeight);
      InitMobileNavAccordion(heightMobileMenuLinks);
    }

    firstOpen = false;
  });

  const page = document.querySelector('main');
  let windowWidth = window.innerWidth;

  function setHeaderBackground(scrollPosition) {
    let checkPosition = scrollPosition >= 300;
    if (checkPosition) {
      header.classList.add('background');
      if (windowWidth > 1268) {
        document.querySelector('.menu__burger').classList.add('hidden');
        document.querySelector('.menu__list').classList.remove('hidden');
      }
    } else {
      header.classList.remove('background');
      if (windowWidth > 1268) {
        document.querySelector('.menu__burger').classList.remove('hidden');
        document.querySelector('.menu__list').classList.add('hidden');
      }
    }
  }

  page.addEventListener('scroll', function () {
    const scrollPosition = this.scrollTop;
    setHeaderBackground(scrollPosition);
  });
};

const InitMobileNavAccordion = (heightMobileMenuLinks) => {
  let mobileMenuHeaders = document.querySelectorAll('.mobile-menu__header');
  let mobileMenuLinks = document.querySelectorAll('.mobile-menu__links');
  mobileMenuLinks.forEach((item) => {
    item.style.height = 0;
  });
  mobileMenuHeaders.forEach((item, index) => {
    item.addEventListener('click', () => {
      mobileMenuHeaders.forEach((item) => {
        item.classList.remove('open');
      });
      mobileMenuLinks.forEach((item) => {
        item.classList.remove('open');
        item.style.height = `0px`;
      });
      item.classList.add('open');
      mobileMenuLinks[index].classList.add('open');
      mobileMenuLinks[index].style.height = `${
        heightMobileMenuLinks[index] + 24
      }px`;
    });
  });
};
