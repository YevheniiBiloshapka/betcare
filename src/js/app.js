import Accordion from './modules/Accordion.js';

import { HeaderInit } from './modules/Header.js';
import { initFeaturesBlock } from './modules/Features.js';

new Accordion('.accordion', {
  shouldOpenAll: false,
  defaultOpen: [],
  collapsedClass: 'open',
});

document.addEventListener('DOMContentLoaded', function () {
  var galleryTop = new Swiper('.gallery-top', {
    navigation: {
      nextEl: '.services-slider-nav-next',
      prevEl: '.services-slider-nav-prev',
    },
    effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
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
  var heroSwiper = new Swiper('.heroPageSwiper', {
    effect: 'fade',
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // allowTouchMove: false,
    loop: true,
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});

HeaderInit();
initFeaturesBlock();
