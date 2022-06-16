import React from 'react'
import "../styled/Homepage.css"
import {Link} from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='container'>
      <div className='top__pic'>
<img src='https://m.media-amazon.com/images/G/01/2022/homepage6.13/COOP-ASICS-GEL-CUMULUS-24-JUNE-HERO-1440x700.png' alt=''/>
 </div>
 <h1>Shop Popular Categories</h1>
<div className='popular__category'>

<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/71U7e7IRHSL._AC_SX255_.jpg' alt=''/>
  <Link to={`/sneakers`}>Sneakers and Athletic Shoes</Link>
</div>
<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/71H1zKI3q5L._AC_SX255_.jpg' alt=''/>
  <a href='#'>Sandals</a>
</div>
<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/71gw6D5NE+L._AC_SX255_.jpg' alt=''/>
  <a href='#'>Dresses</a>
</div>
<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/71NI4oqYMuL._AC_SX255_.jpg' alt=''/>
  <a href='#'>Loafers</a>
</div>
<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/51lEd4lr0KL._AC_SX255_.jpg' alt=''/>
  <a href='#'>Swimwear</a>
</div>
<div className='popular__cate__cards'>
  <img src='https://m.media-amazon.com/images/I/71F2QuFXVIL._AC_SX255_.jpg' alt=''/>
  <a href='#'>Clogs</a>
</div>

</div>

    </div>
   
  )
}

export default Homepage