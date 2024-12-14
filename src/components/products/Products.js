import React from 'react'
import starIcon from "../../assets/star.png"
import "./Products.css"

const Products = () => {
  return (
    <div className='product'>
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

        <img src='' alt='product-img'/>

        <button></button>

    </div>
  )
}

export default Products