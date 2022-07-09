import './shop.scss';
import productData from '../../data/productData';
import Products from '../../Components/products/Products'
import Filter from '../../Components/filter/Filter';

const Shop = () => {
  return (
    <div className='shop'>
      <div className="left">
        <Filter />
      </div>
      <div className="right">
        {
          productData.map((data) => {
            return (
              <Products data={data} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Shop