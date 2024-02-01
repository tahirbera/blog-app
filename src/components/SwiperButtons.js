import { useSwiper } from "swiper/react";

export default function SwiperButtons(){
    const swiper = useSwiper();
    return(
        <div className="slider-arrows">
        <button className= "s-prev"  onClick={() => swiper.slidePrev() }>
            <img src="https://www.bundle.app/_nuxt/img/newsSliderArrowPrev.5a16865.png" alt="" />
        </button>
        <button className = "s-next"  onClick={() => swiper.slideNext() }>
            <img src="https://www.bundle.app/_nuxt/img/rightslide.3d6f3cd.svg" alt="" />
        </button>
    </div>
    )
}