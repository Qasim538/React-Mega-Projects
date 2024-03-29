import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img src="https://wwww.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className='home_image' />
            
            <div className="home_row">
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
                <Product />
            </div>

        </div>
    </div>
  )
}

export default Home
