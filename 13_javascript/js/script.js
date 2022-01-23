const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 70,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 4000,
  },
});

document.addEventListener('DomContentLoaded', function() {
  document.querySelectorAll('work__step-li').forEach(function(tabsBtn) {
    tabContent.classList.remove('tab-content-active')
  })
  document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

})

