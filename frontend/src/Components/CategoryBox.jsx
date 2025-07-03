import React from 'react';
import '../css/CategoryBox.css'
import Category from './Category';
import grocery from '../assets/grocery.webp'
import mobile from '../assets/mobile.webp'
import fashion from '../assets/fashion.webp'
import electronics from '../assets/electronincs.webp'
import furniture from '../assets/furniture.webp'
import appliances from '../assets/appliances.webp';
import flight from '../assets/flight.webp'
import toys from '../assets/toys.webp'

function CategoryBox() {
  return (
    <div className='category-box d-flex m-3 ps-5 pe-5'>
        <Category image={grocery} category={'Grocery'}/>
        <Category image={mobile} category={'Mobile'}/>
        <Category image={fashion} category={'Fashion'}/>
        <Category image={electronics} category={'Electronics'}/>
        <Category image={furniture} category={'Home & Furniture'}/>
        <Category image={appliances} category={'Appliances'}/>
        <Category image={flight} category={'Flight Booking'}/>
        <Category image={toys} category={'Beauty toys & more'}/>

    </div>
  )
}

export default CategoryBox