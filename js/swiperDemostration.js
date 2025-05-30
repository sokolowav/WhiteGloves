export const initSwiperDemonstration = () => {
  const demonstrationSwiper = new Swiper('.demonstration__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    allowTouchMove: false,
  })
  const mobileToggle = document.querySelector('.swiper__tabsToggle')
  const tabs = document.querySelector('.swiper__tabs')
  const mobileSelected = document.querySelector('.swiper__tabs_selected')
  const demonstrationOverlay = document.querySelector('.demonstration__overlay')
  const closeBtn = demonstrationOverlay.querySelector('.closeBtn')

  mobileToggle?.addEventListener('click', () => {
    tabs.classList.toggle('show')
    mobileToggle.classList.toggle('open')
  })

  document.querySelectorAll('.swiper__tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = parseInt(tab.dataset.tab, 10)
      demonstrationSwiper.slideTo(index)
      document
        .querySelectorAll('.swiper__tab')
        .forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')
      mobileSelected.textContent = tab.textContent
      tabs.classList.remove('show')
      mobileToggle.classList.remove('open')
      demonstrationOverlay.classList.remove('active')
    })
  })

  document.querySelectorAll('.dotWrapper').forEach((dot) =>
    dot.addEventListener('click', () => {
      const text = dot.querySelector('span').innerHTML
      const textWrapper = demonstrationOverlay.querySelector('span')
      textWrapper.innerHTML = text

      demonstrationOverlay.classList.add('active')
    })
  )

  closeBtn.addEventListener('click', () =>
    demonstrationOverlay.classList.remove('active')
  )
}