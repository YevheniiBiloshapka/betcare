import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Accordion from './modules/Accordion.js';

import { HeaderInit } from './modules/Header.js';
import { initFeaturesBlock } from './modules/Features.js';

// import './main.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

new PopupManager();

new BurgerMenu().init();

new Accordion('.accordion', {
  shouldOpenAll: false,
  defaultOpen: [],
  collapsedClass: 'open',
});

document.addEventListener('DOMContentLoaded', function () {
  let clientHeight = document.documentElement.clientHeight;
  let sectionImages = document.querySelectorAll('.fullpage-section__bg-img');
  let btnImages = document.querySelectorAll(
    '.fullpage-section__scroll-btn span'
  );
  let sectionSubtitles = document.querySelectorAll(
    '.fullpage-section__sub-title span'
  );
  let sectionBtns = document.querySelectorAll('.fullpage-section__btn');

  let animationFlag = 0;

  // TODO: fullpage block
  setInterval(() => {
    if (animationFlag < 3) {
      animationFlag++;
      sectionImages.forEach((img) => {
        img.classList.remove('active');
      });
      btnImages.forEach((img) => {
        img.classList.remove('active');
      });
      sectionSubtitles.forEach((title) => {
        title.classList.remove('active');
      });
      sectionBtns.forEach((title) => {
        title.classList.remove('active');
      });
      sectionImages[animationFlag].classList.add('active');
      btnImages[animationFlag].classList.add('active');
      sectionSubtitles[animationFlag].classList.add('active');
      sectionBtns[animationFlag].classList.add('active');
    } else {
      return;
    }
  }, 3000);

  btnImages.forEach((img) => {
    img.addEventListener('click', () => {
      page.scrollBy({
        top: clientHeight,
        behavior: 'smooth',
      });
    });
  });

  var galleryTop = new Swiper('.gallery-top', {
    navigation: {
      nextEl: '.services-slider-nav-next',
      prevEl: '.services-slider-nav-prev',
    },
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    loop: true,
    loopedSlides: 2,
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 40,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 2,
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});

HeaderInit();
initFeaturesBlock();
