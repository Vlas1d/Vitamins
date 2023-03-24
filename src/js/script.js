import * as flsFunctions from "./modules/functions.js";
import * as slider_ from "./modules/slider.js";
import { listContent } from "./modules/list.js";

flsFunctions.isWebp();

slider_.sliders();


//========================================================================================
$('.header__burger').on('click', function () {
    $('.header__menu').toggleClass('open');
});
$('.menu__close').on('click', function () {
    $('.header__menu').toggleClass('open');
});
//========================================================================================

$('.menu__shop-button').on('click', function () {
    $('.menu-shop').toggleClass('open');
});
$('.menu__info-button').on('click', function () {
    $('.menu-info').toggleClass('open');
});

$('.menu-shop > .menu__head').on('click', function () {
    $('.menu-shop').toggleClass('open');
});
$('.menu-info > .menu__head').on('click', function () {
    $('.menu-info').toggleClass('open');
});



$('.header__shopping-card').on('click', function () {
    $('.shop-card').toggleClass('open');
});
$('.shop-card__close').on('click', function () {
    $('.shop-card').toggleClass('open');
});

//========================================================================================

$('.add-prod__switch').on('click', function () {
    $(this).toggleClass('on');
});

$('.quiz__button-next').on('click', function () {
    $('.quiz__text').toggleClass('hide');
    $('.quiz__radio').toggleClass('show');
});

//console.log(listContent('qwe', Array('22', '222', '2222')));

$('.goods-list__next-goods').on('click', function () {
    $('.goods-card').toggleClass('show');
    $(this).toggleClass('show');
    if ($(this).hasClass('show')) {
        $('.goods-list__next-goods > img').css('transform', 'rotate(-90deg)');
    }
    if ($(this).hasClass('show') == false) {
        $('.goods-list__next-goods > img').css('transform', 'rotate(90deg)');
    }
});

//-----------------------LIST-INIT----------------------------------------------------------------------------------------------------

//-----------------------List-Items------------------------------------------------------------
const cataloge_menu = Array('All categories', 'Vitamins & Dietary Supplements', 'Weight Loss',
    'Minerals', 'Antioxidants', 'Probiotics', 'Pain Relief', 'Prenatal Vitamins', 'Sale%');
//---------------------------------------------------------------------------------------------

function createList(list_class, list_name, list_items) {
    $(`${list_class}`).on('click', function () {
        $(`${list_class} .list__items`).toggleClass('list__show');
    });
    const List_ = document.querySelector(`${list_class}__items`);
    List_.innerHTML = listContent(`${list_name}`, list_items); //listContent(назва(унікальна), список елементів)
}

//----------------------------------------------------------------------------------------------

if (document.querySelector('.cataloge-menu') != null) {
    createList('.cataloge-menu', 'cataloge-menu', cataloge_menu);
    console.log(111);
}

