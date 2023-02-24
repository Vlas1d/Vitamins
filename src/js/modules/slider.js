import Swiper, { FreeMode, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
//import { version } from "webpack";

export function sliders() {
    if (document.querySelector('.item-goods') != null) {
        const goods_swiper = new Swiper('.item-goods__picture', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (document.querySelector('.product__image') != null) {
        const goods_swiper = new Swiper('.product__image', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (document.querySelector('.production__slider') != null) {
        const production_swiper = new Swiper('.production__slider', {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (document.querySelector('.nuts-vitamins') != null) {
        const vitamins_swiper = new Swiper('.nuts-vitamins__slider', {
            modules: [Navigation, Pagination],
            loop: true,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                920: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 3,
                }
            },

            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

        });
    }

    if (document.querySelector('.news') != null) {
        const news_swiper = new Swiper('.news', {
            modules: [Navigation, Pagination],
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                920: {
                    slidesPerView: 2,
                },
                1300: {
                    slidesPerView: 3,
                }
            },
            spaceBetween: 33,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

        });
    }

    if (document.querySelector('.payment-slider') != null) {
        const payment_swiper = new Swiper('.payment-slider', {
            modules: [Navigation, Pagination],

            slidesPerView: 1,
            spaceBetween: 20,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    const text = Array('Оплата заказа', 'Доставка партии', 'Возврат товара');
                    const icons_class = Array('svg-wallet', 'svg-car', 'svg-box');
                    return `<div class="${className}">
                    <img class="${icons_class[index]}" loading="lazy" src="" alt="payment">
                    <span>${text[index]}</span>
                </div>`;
                },
            },
        });
    }

    if (document.querySelector('.business-slider') != null) {
        const business_swiper = new Swiper('.business-slider', {
            modules: [Navigation, Pagination],

            slidesPerView: 1,
            spaceBetween: 20,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    const text = Array('Крупные<br> супермаркеты', 'Розничные<br> магазины',
                        'Компании<br> HoReCa', 'Фитнес<br> и спорт клубы', 'Кондитерские<br> и пекарни');
                    const icons_class = Array('svg-supermarket', 'svg-shop', 'svg-table', 'svg-fitnes', 'svg-cake');
                    return `<div class="${className}">
                    <img class="${icons_class[index]}" loading="lazy" src="" alt="business">
                    <span>${text[index]}</span>
                </div>`;
                },
            },
        });
    }

    if (document.querySelector('.production__info_slider') != null) {
        const productionInfoSwiper = new Swiper('.production__info_slider', {
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