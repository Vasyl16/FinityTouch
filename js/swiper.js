import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiperTeamInstance = null;

function initializeSwiperTeam() {
  if (window.innerWidth < 920 && !swiperTeamInstance) {
    console.log('Initializing Swiper');
    swiperTeamInstance = new Swiper('.swiper-team', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.swiper-team-button-next',
        prevEl: '.swiper-team-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        0: {
          spaceBetween: 10,
        },
        479: {
          spaceBetween: 20,
        },
      },
    });
  } else if (window.innerWidth >= 920 && swiperTeamInstance) {
    console.log('Destroying Swiper');
    swiperTeamInstance.destroy(true, true);
    swiperTeamInstance = null;
  }
}

// Run on page load
initializeSwiperTeam();

// Run on window resize
window.addEventListener('resize', initializeSwiperTeam);

let swiperLables = null;

function initializeSwiperLables() {
  console.log('Initializing Swiper');
  swiperLables = new Swiper('.swiper-labels', {
    direction: 'horizontal',
    loop: true, // Enable continuous loop mode
    slidesPerView: 'auto', // Allow multiple slides to be visible at once
    freeMode: true, // Enable free mode for smooth swiping
    // centeredSlides: true, // Center the active slide
    grabCursor: true,
    spaceBetween: 33,
    breakpoints: {
      767.98: {
        spaceBetween: 76, // Space between slides for resolutions less than 767.98px
      },
    },
  });
}

// Run on page load
initializeSwiperLables();

// Run on window resize
