export const initSwiperNews = () => {
  new Swiper('.news .swiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.news .swiper-pagination',
      clickable: true,
    },
  })
}