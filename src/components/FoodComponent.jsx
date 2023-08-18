import React from 'react'

const FoodComponent = (props) => {
    const {foodName,image_url} = props
  return (
    <div className='single-food'>
        <h2>{foodName}</h2>
        <img src={image_url} alt={foodName} />
    </div>
  )
}

export default FoodComponent