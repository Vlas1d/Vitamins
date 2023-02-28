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
}