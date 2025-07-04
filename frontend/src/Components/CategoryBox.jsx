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
        <Category image={grocery} category={'Grocery'} link='/grocery'/>
        <Category image={mobile} category={'Mobile'} link='category/mobiles'/>
        <Category image={fashion} category={'Fashion'} link='category/fashion'/>
        <Category image={electronics} category={'Electronics'} link='category/electronics'/>
        <Category image={furniture} category={'Home & Furniture'} link='category/homeNFurniture'/>
        <Category image={appliances} category={'Appliances'} link='category/appliance'/>
        <Category image={flight} category={'Flight Booking'}/>
        <Category image={toys} category={'Toys'} link='category/toy'/>

    </div>
  )
}

export default CategoryBox