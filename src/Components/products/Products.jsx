import './products.scss';
import { Cached, FavoriteBorderOutlined, Search } from '@mui/icons-material';

const Products = ({data}) => {
    return (
        <div className='cartItemContainer'>
            <div className="cartItem">
                <div className="cartImageSection">
                    <img src={data.cartItemImage} alt="" />
                </div>
                <div className="offerSection">
                    {
                        data.cartItemTypeAndOffer.map((offer, index, cartItemTypeAndOffer) => {
                            console.log();
                            return (
                                <span key={index} className={`offerItem ${offer}`}>{cartItemTypeAndOffer.length === index + 1 ? (offer + "%") : offer}</span>
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
                    <span className="newPrice">${(data.cartItemPrice * (data.cartItemTypeAndOffer[data.cartItemTypeAndOffer.length - 1])) === "" ? data.cartItemPrice :
                        (data.cartItemPrice - Math.ceil((data.cartItemPrice * (data.cartItemTypeAndOffer[data.cartItemTypeAndOffer.length - 1])) / 100))
                    }</span>
                    <span className="oldPrice">${data.cartItemPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default Products