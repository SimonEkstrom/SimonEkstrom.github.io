const mq = window.matchMedia('(min-width: 576px)');

function handleScreenChange(e) {
  if (e.matches) {
    // screen is ≥ 576px
  } else {
    // screen is < 576px
    document.addEventListener('click', () => {
        if (document.querySelector('.swiper-slide-zoomed')) {
            console.log('Zoomed');
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.add('swiper-fullscreen');});
        } else {
            console.log('Not Zoomed');
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.remove('swiper-fullscreen');});
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

