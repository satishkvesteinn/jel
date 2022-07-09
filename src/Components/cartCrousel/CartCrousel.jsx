import './cartCrousel.scss'
import { Navigation, Scrollbar, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cached, FavoriteBorderOutlined, Search } from '@mui/icons-material'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const crouselCartItems = [
    {
        id: 1,
        cartItemImage: "https://htmldemo.net/corano/corano/assets/img/product/product-3.jpg",
        carItemName: "Citygold Exclusice Ring",
        cartItemMaterial: "Silver",
        cartItemPrice: 330,
        cartItemColor: [
            "red", "green", "yellow"
        ],
        cartItemTypeAndOffer: [
            "Sale", "9"
        ],

    },

    {
        id: 2,
        cartItemImage: "https://htmldemo.net/corano/corano/assets/img/product/product-1.jpg",
        carItemName: "Citygold Exclusice Ring",
        cartItemMaterial: "Silver",
        cartItemPrice: 330,
        cartItemColor: [
            "red", "green", "yellow"
        ],
        cartItemTypeAndOffer: [
            "Sale"
        ],

    },

    {
        id: 3,
        cartItemImage: "https://htmldemo.net/corano/corano/assets/img/product/product-2.jpg",
        carItemName: "Citygold Exclusice Ring",
        cartItemMaterial: "Silver",
        cartItemPrice: 330,
        cartItemColor: [
            "red", "green", "yellow"
        ],
        cartItemTypeAndOffer: [
            "New", "5"
        ],

    },

    {
        id: 4,
        cartItemImage: "https://htmldemo.net/corano/corano/assets/img/product/product-4.jpg",
        carItemName: "Citygold Exclusice Ring",
        cartItemMaterial: "Silver",
        cartItemPrice: 330,
        cartItemColor: [
            "red", "green", "yellow"
        ],
        cartItemTypeAndOffer: [
            "Sale", "20"
        ],

    },

    {
        id: 5,
        cartItemImage: "https://htmldemo.net/corano/corano/assets/img/product/product-5.jpg",
        carItemName: "Citygold Exclusice Ring",
        cartItemMaterial: "Silver",
        cartItemPrice: 330,
        cartItemColor: [
            "red", "green", "yellow", "orange", "gray",
        ],
        cartItemTypeAndOffer: [
            "New", "Sale", "60"
        ],
    },
]

console.log(crouselCartItems);
const CartCrousel = () => {
    return (
        <Swiper
            // className='cartCrousel'
            modules={[Navigation, Scrollbar, A11y, FreeMode]}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={true}
            className="mySwiper"
        >
            {
                crouselCartItems.map((data) => {
                    return (
                        <SwiperSlide className='cartItemContainer'>
                            <div className="cartItem">
                                <div className="cartImageSection">
                                    <img src={data.cartItemImage} alt="" />
                                </div>
                                <div className="offerSection">
                                    {
                                        data.cartItemTypeAndOffer.map((offer, index) => {
                                            return (
                                                <span key={index} className={`offerItem ${offer}`}>{offer.lastIndexOf(offer.length - 1) ? offer : offer + "%"}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className="compareOption">
                                    <span className="compareOptionItem"><FavoriteBorderOutlined className='icon' /></span>
                                    <span className="compareOptionItem"><Cached className='icon' /></span>
                                    <span className="compareOptionItem"><Search className='icon' /></span>
                                </div>
                                <div className="addTocart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            <div className="cartItemDetails">
                                <p className="cartItemMaterial">{data.cartItemMaterial}</p>
                                <div className="cartItemColorOption">
                                    {
                                        data.cartItemColor.map((color, index) => {
                                            return (
                                                <span key={index} className="itemColor" style={{ backgroundColor: `${color}` }}></span>
                                            )
                                        })
                                    }
                                </div>
                                <h3 className='cartItemName'>{data.carItemName}</h3>
                                <div className="cartItemPrice">
                                    <span className="newPrice">{(data.cartItemPrice * (data.cartItemTypeAndOffer[data.cartItemTypeAndOffer.length - 1])) === "" ? data.cartItemPrice : 
                                        (data.cartItemPrice - Math.ceil((data.cartItemPrice * (data.cartItemTypeAndOffer[data.cartItemTypeAndOffer.length - 1]))/100))
                                    }</span>
                                    <span className="oldPrice">${data.cartItemPrice}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default CartCrousel