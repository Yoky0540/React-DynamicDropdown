import React from 'react'

const DropdownComponent = (props) => {

  const {changeFoodData} = props

  const changeMenu = (e) =>{
    props.changeFoodData(e.target.value)
  }

  return (
    <nav>
      <h2>Dynamic Dropdown</h2>
      <select className='menu' onChange={changeMenu}>
        <option value="All Menu">All Menu</option>
        <option value="Stir-Fried Menu">Stir-Fried Menu</option>
        <option value="Curry-Boil Menu">Curry-Boil Menu</option>
        <option value="Drink Menu">Drink Menu</option>
        <option value="Steak Menu">Steak Menu</option>
      </select>
    </nav>
  )
}

export default DropdownComponent