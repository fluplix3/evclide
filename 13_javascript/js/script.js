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

document.querySelectorAll('.work__tabs-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.work__tabs-btn').forEach(function (btn) {
      btn.classList.remove('work_one-tab')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.work__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work__tabs-item-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__tabs-item-active');
    });
});


