const mq = window.matchMedia('(min-width: 576px)');

function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android|windows phone|blackberry|mobile|webos|opera mini|kindle/.test(userAgent);
}

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoHeight: true,
    allowTouchMove: true,
    lazy: true,
    direction: 'horizontal', // or 'vertical'
    mousewheel: {
        invert: false, // Set to true to invert direction
        forceToAxis: true, // Recommended for trackpads
    },
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    keyboard: {
        enabled: true,
    },
    zoom: true,
    zoom: {
        maxRatio: 1.75,
    },
});

swiper.on('zoomChange', (swiper, scale) => {
  if (isMobileDevice()) {
    const zoomed = scale > 1;
    if(zoomed){
        swiper.allowTouchMove = false;
        swiper.keyboard.disable()
        swiper.mousewheel.disable()
    }
    else{
        swiper.allowTouchMove = true;
        swiper.keyboard.enable()
        swiper.mousewheel.enable()
    }
  }
});



/*
const mq = window.matchMedia('(min-width: 576px)');

function handleScreenChange(e) {
  if (e.matches) {
    // screen is ≥ 576px
  } else {
    // screen is < 576px
    document.addEventListener('click', () => {
        if (document.querySelector('.swiper-slide-zoomed')) {
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.add('swiper-fullscreen');});
            document.querySelectorAll('.modal-body').forEach(el => {
                el.classList.add('position-unset');});
        } else {
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.remove('swiper-fullscreen');});
            document.querySelectorAll('.modal-body').forEach(el => {
                el.classList.remove('position-unset');});
        }
    });
  }
}

// run once on load
handleScreenChange(mq);

// listen for changes
mq.addEventListener('change', handleScreenChange);

swiper.on('zoomChange', (swiper, scale) => {
    if (e.matches) {
        // screen is ≥ 576px
    } else {
        // screen is < 576px
        const zoomed = scale > 1;

        swiper.allowTouchMove = !zoomed;
        swiper.mousewheel && (swiper.mousewheel.enabled = !zoomed);
        swiper.keyboard && (swiper.keyboard.enabled = !zoomed);
    }
});

*/