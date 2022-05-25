// slick using JQUERY
function setAnimation(blocksAmount) {
  $('.populars__container').slick({
    slidesToShow: blocksAmount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: '.slider-arrows',
    prevArrow: '<button type="button" class="slick-button slick-prev">Back</button>',
    nextArrow: '<button type="button" class="slick-button slick-next">Next</button>',
    swipeToSlide: true,
    infinite: false
  });

  $('.populars__container_2').slick({
    slidesToShow: blocksAmount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    appendArrows: '.slider-arrows2',
    prevArrow: '<button type="button" class="slick-button slick-prev">Back</button>',
    nextArrow: '<button type="button" class="slick-button slick-next">Next</button>',
    swipeToSlide: true,
    infinite: false
  });
}

// получение ширины
const width = document.documentElement.clientWidth;

// выбор расположения
if (width <= 600) {
  setAnimation(1);
} else if (width <= 767) {
  setAnimation(2);
} else if (width <= 992) {
  setAnimation(3);
} else setAnimation(4);


