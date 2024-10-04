import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Header from '../components/Header';


const RomanceLovePage = () => {

  const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/productlist');  // Navigates to the product page
    };
  return (
    <div className='RomancePage'>
      <Link to='/romance-love' onClick={handleShopNowClick} style={{ cursor: 'pointer' }}></Link>


      <ProductList/>
      
      <Header/>




    </div>
  )
}

export default RomanceLovePage;
