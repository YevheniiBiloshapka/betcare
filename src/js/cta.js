import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Accordion from './modules/Accordion.js';

import { HeaderInit } from './modules/Header.js';

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

var swiper = new Swiper('.cta-swiper', {
  slidesPerView: 1,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
  },

  pagination: {
    el: '.cta-swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});
document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const ctaBlock = document.querySelector('.cta-swiper');
  const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
  if (swiperSlides.length > 3) {
    ctaBlock.classList.add('is-hidden');
  }
});

HeaderInit();
