import './item.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Cached, FavoriteBorderOutlined, Search } from '@mui/icons-material'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Grid, Navigation } from "swiper";

const Item = () => {

    const itemList = [
        {
            id: 1,
            backgroundImage: "https://htmldemo.net/corano/corano/assets/img/banner/img1-top.jpg",
            itemCategory: "beautiful",
            itemMaterial: "Wedding Rings",
            textAlign: "start",
            listWidth: 2,
        },

        {
            id: 2,
            backgroundImage: "https://htmldemo.net/corano/corano/assets/img/banner/img2-top.jpg",
            itemCategory: "Earings",
            itemMaterial: "Tangerine Floral Earring",
            textAlign: "center",
            listWidth: 2,
        },

        {
            id: 3,
            backgroundImage: "https://htmldemo.net/corano/corano/assets/img/banner/img3-top.jpg",
            itemCategory: "New Arrivalls",
            itemMaterial: "Peral Necklaces",
            textAlign: "center",
            listWidth: 2,
        },

        {
            id: 4,
            backgroundImage: "https://htmldemo.net/corano/corano/assets/img/banner/img4-top.jpg",
            itemCategory: "New Design",
            itemMaterial: "Diamond Jewelry",
            textAlign: "start",
            listWidth: 2,
        },
    ]

    return (
        <div className="item">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                grid={{
                    rows: 2,
                    fill: "row",
                    column: "column"
                }}
                breakpoints={{
                    // when window width is >= 150px
                    150: {
                        grid:{rows : 4},
                        slidesPerView: 1,
                        spaceBetween: 10,
                        navigation: false
                    },
                    // when window width is >= 320px
                    320: {
                        grid:{rows : 4},
                        slidesPerView: 1,
                        spaceBetween: 10,
                        navigation: false
                    },
                    // when window width is >: 480px
                    600: {
                        grid:{rows : 2},
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is >: 640px
                    768: {
                        grid:{rows : 2},
                        slidesPerView: 2,
                        spaceBetween: 20,
                        navigation: true
                    }
                }}
                autoplay={true}
                modules={[Navigation, Grid, Autoplay]}
                className="mySwiper"

            >
                {
                    itemList.map((data) => {
                        return (
                            <SwiperSlide className="itemList" key={data.id} style={{ backgroundImage: `url("${data.backgroundImage}")`, textAlign: `${data.textAlign}` }}>
                                <div className="list">
                                    <h2 className="itemCategory">{data.itemCategory}</h2>
                                    <h1 className="itemMaterials">{data.itemMaterial}</h1>
                                    <a href="" className='shopButton'>Shop Now</a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Item