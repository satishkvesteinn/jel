// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './crousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const crouselItems = [
    {
        id: 1,
        backgroundUrl: "https://htmldemo.net/corano/corano/assets/img/slider/home1-slide2.jpg",
        itemTitle: "Family Jewellery Collection",
        itemDesc: "Slides manipulation module (only for Core version)",
        itemDirection: " row",
    },

    {
        id: 2,
        backgroundUrl: "https://htmldemo.net/corano/corano/assets/img/slider/home1-slide3.jpg",
        itemTitle: "Diamonds Jewelry Collections",
        itemDesc: "Slides manipulation module (only for Core version)",
        itemDirection: " row-reverse",
    },

    {
        id: 3,
        backgroundUrl: "https://htmldemo.net/corano/corano/assets/img/slider/home1-slide1.jpg",
        itemTitle: "Grace Designer Jewelry",
        itemDesc: "Slides manipulation module (only for Core version)",
        itemDirection: " row",
    },

]

const Crousel = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            //   spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                crouselItems.map((data) => {
                    return (
                        <SwiperSlide key={data.id} className='itemContainer' style={{backgroundImage: `url("${data.backgroundUrl}")`, flexDirection: `${data.itemDirection}` }}>
                            <div className="item">
                                <h1 className="itemTitle">{data.itemTitle}</h1>
                                <p className="itemDesc">{data.itemDesc}</p>
                                <button className="itemButton">Read more</button>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default Crousel