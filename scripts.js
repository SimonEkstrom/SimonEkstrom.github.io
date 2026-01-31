const mq = window.matchMedia('(min-width: 576px)');

function handleScreenChange(e) {
  if (e.matches) {
    // screen is ≥ 576px
    doDesktopThing();
  } else {
    // screen is < 576px
    document.addEventListener('click', () => {
        if (document.querySelector('.swiper-slide-zoomed')) {
            console.log('Zoomed');
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.add('h-100');});
            document.querySelectorAll('.modal-header').forEach(el => {
                el.classList.add('position-absolute');
                el.classList.add('bottom-100');});
        } else {
            console.log('Not Zoomed');
            document.querySelectorAll('.swiper').forEach(el => {
                el.classList.remove('h-100');});
            document.querySelectorAll('.modal-header').forEach(el => {
                el.classList.remove('position-absolute');
                el.classList.remove('bottom-100');});
        }
    });
  }
}

// run once on load
handleScreenChange(mq);

// listen for changes
mq.addEventListener('change', handleScreenChange);