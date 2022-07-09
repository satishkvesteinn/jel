import './home.scss'
import Crousel from '../../Components/crousel/Crousel'
import Item from '../../Components/item/Item'
// import CartCrousel from '../../Components/cartCrousel/CartCrousel'
import CartItemCrousel from '../../Components/cartItemCrousel/CartItemCrousel'

const Home = () => {
  return (
    <div className='home'>
      <Crousel />
      <div className="itemSection">
        <Item />
        {/* <CartCrousel /> */}
        <CartItemCrousel row={1}/>
        <CartItemCrousel row={2}/>
      </div>
    </div>
  )
}

export default Home