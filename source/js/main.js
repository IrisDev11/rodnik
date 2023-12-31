import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initMobileMenu} from './modules/init-mobile-menu';
import {initSliderNews} from './modules/init-slider-news';
import {initSliderReviews} from './modules/init-slider-reviews';
import {initToggleClassCard} from './modules/init-toggle-class-card';
import {initVideoPlay} from './modules/init-video-play';
import {initTabs} from './modules/init-tabs';
import {initAccordions} from './modules/init-accordion';
import {initContentModal} from './modules/init-content-modal';
import {initHeaderScroll} from './modules/init-header-scroll';
import {initIndicationsSlider} from './modules/init-indications-slider';
import {initSubmenuMobile} from './modules/init-submenu-mobile';
import {initSliderCards} from './modules/init-slider-cards';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initMobileMenu();
    initSliderNews();
    initSliderReviews();
    initToggleClassCard();
    initVideoPlay();
    initTabs();
    initAccordions();
    initContentModal();
    initHeaderScroll();
    initIndicationsSlider();
    initSubmenuMobile();
    initSliderCards();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
