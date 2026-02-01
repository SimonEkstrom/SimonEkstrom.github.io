const mq = window.matchMedia('(min-width: 576px)');

function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|ipad|android|windows phone|blackberry|mobile|webos|opera mini|kindle/.test(userAgent);
}

// Initialize Swiper
var swiper = new Swiper(".magazineSwiper", {
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
        maxRatio: 1.5,
    },
});

swiper.on('zoomChange', (swiper, scale) => {
    if (isMobileDevice()) {
        const zoomed = scale > 1;
        swiperFullscreen(zoomed)
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

function swiperFullscreen(fullscreen){
    if(fullscreen){
        document.querySelectorAll('.modal').forEach(el => {
            el.classList.add('modal-swiper-fullscreen');});
    }
    else{
        document.querySelectorAll('.modal').forEach(el => {
            el.classList.remove('modal-swiper-fullscreen');});
    }
}