const slider = tns({
    container: '.slider__item',
    items: 2,
    "gutter": 10,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');  
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');  
  });