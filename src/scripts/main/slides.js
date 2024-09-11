import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'styles/main/swiper.scss';

Swiper.use([Autoplay, Navigation]);

if (document.querySelector('#swiper-editor-banners')) {
    const swiperEditorBanners = new Swiper('#swiper-editor-banners', {
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },
        spaceBetween: 12,
        navigation: {
            nextEl: '#swiper-editor-banners .swiper-button-next',
            prevEl: '#swiper-editor-banners .swiper-button-prev',
        },
    });
}

if (document.querySelector('#swiper-editor-body-type')) {
    const swiperEditorBodyType = new Swiper('#swiper-editor-body-type', {
        slidesPerView: 3,
        spaceBetween: 0.7666 * (document.body.clientHeight / 100),
    });
}


if (document.querySelector('#swiper-modal-editor-body-type')) {
    const swiperModalEditorBodyType = new Swiper('#swiper-modal-editor-body-type', {
        slidesPerView: 3,
        spaceBetween: 1.794 * (document.body.clientWidth / 100),
    });
}