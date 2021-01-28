const slider = tns({
    container: '.slider__item',
    items: 2,
    "gutter": 10,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
     responsive: {
      320: {
        gutter: 20,
        items: 1,
        nav: true
      },
      700: {
        gutter: 30,
        items: 1,
        nav: false
      },
      900: {
        items: 2,
        nav: false
      }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');  
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');  
  });