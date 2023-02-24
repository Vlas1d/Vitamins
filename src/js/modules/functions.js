export function isWebp() {
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {

        if (support == true) {
            document.querySelector('html').classList.add('webp');
        } else {
            document.querySelector('html').classList.add('no-webp');
        }
        console.log('123345');
    });
}

export function sliderAnimation(slides, slide_active, current_slider_control) {
    for (let i = slides.length - 1; i >= 0; i--) {
        slides[i].style.transform = 'translate(0px, 0px)';
        slides[i].style.bottom = `${70 * (slides.length - 1 - i)}px`;
        if (slide_active === slides[i]) {
            for (let j = slides.length - 1; j > i; j--) {
                slides[j].style.transform = 'translate(0, -70px)';
            }
        }
    }
    document.querySelector(current_slider_control).style.height = `${slides.length * 70}px`;
}