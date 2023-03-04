import Swiper, { FreeMode, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
//import { version } from "webpack";

export function sliders() {
    if (document.querySelector('.choose__slider') != null) {
        const goods_swiper = new Swiper('.choose__slider', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 33,
        });
    }

    if (document.querySelector('.reviews') != null) {
        const goods_swiper = new Swiper('.reviews', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 32,
        });
    }

    if (document.querySelector('.cataloge-slider') != null) {
        const goods_swiper = new Swiper('.cataloge-slider', {
            modules: [Navigation, Pagination],
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 50,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}