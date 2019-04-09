$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  items: 1,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplaySpeed: 1000,
});


// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});


$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  autoplaySpeed: 1000,
  margin: 40,
  responsive: {
    0: {
        items:2,
        margin: 20,
    },
    450: {
        items:3
    },
    1000: {
        items:4
    },
    1200: {
        items:5
    }
  }
});

$(document).ready(() => {
  const pageUrl = window.location.href;
  const windowWidth = document.body.clientWidth;

  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.go-top').fadeIn().css('transform','scale(1)');
      $('.menu').addClass('down animated slideInDown');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
      $('.menu').removeClass('down animated slideInDown');

    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  for (let item = 0; item < 10; item++) {
    $('.slider .owl-dot span').eq(item).text('0' + `${item+1}`)
  }

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.search-btn i').click(function() {
    $('.search').toggleClass('active');
    $(this).toggleClass('mdi-magnify mdi-close');
  });

  if (windowWidth < 1200) {
    $('.menu .nav-link').parent().find('ul').filter(function() {
      $(this).parent().find('.nav-link').removeAttr('href');
    });
  }
});
