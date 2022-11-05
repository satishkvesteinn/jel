import './cartItemCrousel.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Product data from data folder
import productData from '../../data/productData';


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Grid, Navigation } from "swiper";
import Products from '../products/Products';
console.log(productData);

const CartItemCrousel = ({ row }) => {
    console.log(row);
   

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            grid={{
                rows: row,
                fill: "row",
            }}
            breakpoints={{
                // when window width is >= 150px
                150: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: false
                },
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    navigation: false
                },
                // when window width is >: 480px
                600: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >: 640px
                768: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                    navigation: true
                }
            }}
            autoplay={true}
            modules={[Navigation, Grid, Autoplay]}
            className="mySwiper"

        >
            {
                productData.map((data) => {
                    return (
                        <SwiperSlide key={data.id}>
                            <Products data={data}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default CartItemCrousel