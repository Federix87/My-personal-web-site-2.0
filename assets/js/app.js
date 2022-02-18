
// Scrollify
const scrollMediaQuery = window.matchMedia('(min-width: 1370px)');

if (scrollMediaQuery.matches) {
  $(function () {
    $.scrollify({
      section: '.wow'
    });
  });

  $.scrollify({
    section: '.wow',
    sectionName: 'section-name',
    interstitialSection: '',
    easing: 'swing',
    scrollSpeed: 700,
    offset: 0,
    scrollbars: true,
    standardScrollElements: '',
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    prima: function () {},
    after: function () {},
    afterResize: function () {},
    afterRender: function () {}
  });
}

// Typewriter
let selezione = document.querySelector('.dinamico');

let testo = new Typewriter(selezione, {
  strings: '<strong>Stop thinking, Start doing!</strong>',
  autoStart: true,
  loop: true,
  delay: 50,
  deleteSpeed: 30,
  pauseFor: 4000
});

// DOM elements selector
const softButton = document.querySelector('.soft-skills-button');
const hardButton = document.querySelector('.hard-skills-button');
const softSkillsContainer = document.querySelector('.skills-description-soft');
const hardSkillsContainer = document.querySelector('.skills-description-hard');
const contactButton = document.querySelector('.contact-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.btn-close-modal');
const header = document.querySelector('.nav');
const nav = document.querySelector('.nav');

const initialCoords = header.getBoundingClientRect();
const navMediaQuery = window.matchMedia('(min-width: 1025px)');

if (navMediaQuery.matches) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > initialCoords.top) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
}

// Skills soft & hard button  listener
softButton.addEventListener('click', function () {
  hardSkillsContainer.classList.remove('active');
  softSkillsContainer.classList.add('active');
  hardButton.classList.remove('btn-active');
  softButton.classList.add('btn-active');
});

hardButton.addEventListener('click', function () {
  softSkillsContainer.classList.remove('active');
  hardSkillsContainer.classList.add('active');
  softButton.classList.remove('btn-active');
  hardButton.classList.add('btn-active');
});

contactButton.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Overlay listener
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});

// Modal close button
buttonCloseModal.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});


// Slider
const slides = document.querySelectorAll('.card-project');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide);

const mq = window.matchMedia('(max-width: 1025px)');

if (mq.matches) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${120 * index}%)`;

    // 0%, 100%, 200%, 300%
  });
} else {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${50 * index}%)`;
  });
}

if (mq.matches) {
  // Next Slide
  btnRight.addEventListener('click', function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${120 * (index - currentSlide)}%)`;

      console.log(currentSlide);
      console.log(index);
      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });

  // Previous Slide
  btnLeft.addEventListener('click', function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${120 * (index - currentSlide)}%)`;

      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });

  // Previous slide whit key left
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }

      slides.forEach(function (slide, index) {
        slide.style.transform = `translateX(${120 * (index - currentSlide)}%)`;

        // current slide = 1: -100%, 0%, 100%, 200%
      });
    }
  });

  // Next slide whit key right
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight')
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${120 * (index - currentSlide)}%)`;

      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });
} else {
  // Next Slide
  btnRight.addEventListener('click', function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${50 * (index - currentSlide)}%)`;

      console.log(currentSlide);
      console.log(index);
      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });

  // Previous Slide
  btnLeft.addEventListener('click', function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${50 * (index - currentSlide)}%)`;

      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });

  // Previous slide whit key left
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }

      slides.forEach(function (slide, index) {
        slide.style.transform = `translateX(${50 * (index - currentSlide)}%)`;

        // current slide = 1: -100%, 0%, 100%, 200%
      });
    }
  });

  // Next slide whit key right
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight')
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${50 * (index - currentSlide)}%)`;

      // current slide = 1: -100%, 0%, 100%, 200%
    });
  });
}



// Up to 20px button appears  
let myButton = document.querySelector('#myBtn');

const scrollFunction = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
};

// Button listener
window.addEventListener('scroll', scrollFunction);

const topFunction = function () {
  window.scroll({ top: 0, behavior: 'smooth' });
};

myButton.addEventListener('click', topFunction);
