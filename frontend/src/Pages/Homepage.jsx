import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryBox from '../Components/CategoryBox'
import Carousel from '../Components/Carousel'
import Offers from '../Components/Offers'

function Homepage() {
  return (
    <>
        <CategoryBox />
        <Carousel />
        <Offers />
    </>
  )
}

export default Homepage