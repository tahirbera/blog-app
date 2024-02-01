import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import neoldu from './neoldu';

export default function Slider(){
    const handleSwiper = (swiper) => {
        console.log(swiper); // Make sure swiper is logged properly
      };
    return(
      <>
      <div className="slider-sec">
                  <div className="slider-top-text">
                      <span className = "text-1">What Happened</span>
                      <span className = "text-2">News</span>
                  </div>
                  <div className="swiper-container news-slider">
                      <div className="swiper-wrapper">
                      <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            breakpoints={{ 768: { slidesPerView: 3 } }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            
                          >
                            {neoldu.map((ne, index) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                <div className="slider-item">
                                    <div className="image" >
                                        <a href={`/article/neoldu/${index}`}>
                                            <img src={ne.resim} alt="" height="170" />
                                        </a>
                                    </div>
                                    <div className="small-desc">
                                        <span>Bundle</span>
                                        <span>{ne.time}</span>
                                    </div>
                                    <div className="title">
                                        <a href="">{ne.title}</a>
                                    </div>
                                </div>
                            </div>  
                            </SwiperSlide>
                            ))}


                      </Swiper>
                      </div>
                  </div>
              </div>   
      </>
    )
  }
  