import { useState } from 'react'
import './App.css'
import DropdownComponent from './components/DropdownComponent'
import FoodComponent from './components/FoodComponent'
import MenuData from './data/MenuData.js'

function App() {
  const [foods,setFoods] = useState(MenuData)

  const changeFoodData = (foodData) => {
    const category = foodData
    if(category==="All Menu"){
      setFoods(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return element.menu === category
      })
      setFoods(result)
    }
  }

  return (
    <div className='container'>
      <DropdownComponent changeFoodData={changeFoodData}/>
      <div className="content">
        {foods.map((food,index)=>{
          return <FoodComponent key={index} {...food} />
        })}
      </div>
      
    </div>
  )
}

export default App
