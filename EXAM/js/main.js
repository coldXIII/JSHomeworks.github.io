///menu...........
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header__navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

///header onscroll...
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('header').addClass('fix');
    } else {
      $('header').removeClass('fix');
    }
  });
});

///slider.............

$('.responsive').slick({
  slidesToShow: 3,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

///pagination.............

function pagination() {
  let offset = $(document).scrollTop();
  let windowHeight = $(window).height();
  let $body = $('body');
  let padding = 0.75;
  let pages = Object.keys($('.page'))
    .filter((section) => Number(section) + 1)
    .map((section) => Number(section) + 1);

  pages.map((page) => {
    if (offset > windowHeight * (page - 2 + padding)) {
      $body.removeClass().addClass('page-' + page);
    }
  });
}

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function (e) {
  $('html, body').animate(
    {
      screenTop: $($.attr(this, 'href')).offset().top,
    },
    500
  );
});

///map..............

let myLat = { lat: 48.9226, lng: 24.7111 };
let mapOptions = {
  center: myLat,
  zoom: 11,
  mapTypeID: google.maps.MapTypeId.ROADMAP,
};

let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

let marker = new google.maps.Marker({
  position: { lat: 48.9226, lng: 24.7111 },
  map: map,
});

///modal............

function modalToggle() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('active');
}
