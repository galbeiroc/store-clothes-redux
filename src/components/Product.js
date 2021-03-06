import { Link } from 'react-router-dom';

function Product({ product: { id, title, price, category, image }}) {
  return (
    <div className="four wide column">
      <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price"> $ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product;