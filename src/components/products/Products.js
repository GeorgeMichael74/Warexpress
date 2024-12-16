import React from 'react'
import starIcon from "../../assets/star.png"
import "./Products.css"

const Products = () => {
  return (
    <div className='product'>
      <img src="" alt='product-img' />

        <div className='product-info'>
            <p>title</p>
            <p className='product-price'>
                <small>€</small>
                <strong>105</strong>
            </p>
        </div>

        <div className='product-rating'>
            <p><img src={starIcon} alt="star-icon"/></p>
        </div>


      <button>In den Warenkorb</button>

    </div>
  )
}

export default Products