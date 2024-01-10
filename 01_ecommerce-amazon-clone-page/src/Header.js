import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
    <div className="header_logo">
      <StorefrontIcon className='header_logoImage' fontSize='large'/>
      <h2 className='header_logoTitle'>ShopZone</h2>
    </div>

    <div className="header_search">
    <input type="text" className='header_searchInput' />
      <SearchIcon className='header_searchIcon' />
    </div>

    <div className="header_nav">
      <div className="nav_item">
        <span className="nav_itemOne">Hello Guest</span>
        <span className="nav_itemTwo">Sign In</span>
      </div>
      <div className="nav_item">
        <span className="nav_itemOne">Your</span>
        <span className="nav_itemTwo">Shop</span>
      </div>
      <div className="nav_itemBasket">
        <ShoppingBasketIcon />
        <span className="Nav_itemTwo nav_basketCount"> 0 </span>
      </div>
    </div>
      
    </div>
  )
}

export default Header
