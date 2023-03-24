import Swiper, { FreeMode, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
//import { version } from "webpack";

export function sliders() {
    if (document.querySelector('.choose__slider') != null) {
        const goods_swiper = new Swiper('.choose__slider', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            breakpoints: {
                1100: {
                    spaceBetween: 33,
                },
                320: {
                    spaceBetween: 10,
                }
            },
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

            pagination: {
                el: ".swiper-pagination",
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (document.querySelector('.content-prod__slider') != null && window.innerWidth > 1200) {
        const productionInfoSwiper = new Swiper('.content-prod__slider', {
            modules: [Navigation, Pagination, Scrollbar, Mousewheel, FreeMode],
            direction: "vertical",
            freeMode: true,
            mousewheel: true,
            slidesPerView: "auto",
            scrollbar: {
                el: ".swiper-scrollbar",
            },

        });
    }
}