import React from 'react'
import './Recipe.css'
const Recipe = () => {
  return (
    <>
    <div className="menu">
      <h1 className="menu-title"><u>Classic Cuisine Café Menu</u></h1>
      <div className="menu-section">
        <h2>Beverages</h2>
        <ul className="menu-list">
          <li>Espresso - Rs.200/-</li>
          <li>Latte - Rs.250/-</li>
          <li>Cappuccino - Rs.250/-</li>
          <li>Tea - Rs-50</li>
          <li>Smoothies - Rs.500/-</li>
          <li>Iced Tea - Rs.150/-</li>
          <li>Hot Chocolate - Rs.300/-</li>
          <li>Milkshake - Rs.400/-</li>
          <li>Water - Rs.50/-</li>
          <li>Fresh Juice - Rs.150/-</li>

        </ul>
      </div>
      <div className="menu-section">
        <h2>Pastries</h2>
        <ul className="menu-list">
          <li>Croissant - Rs.250/-</li>
          <li>Muffin - Rs.600/-</li>
          <li>Scone - Rs.575/-</li>
          <li>Chocolate Cake - Rs.450/-</li>
          <li>Cookie - Rs.350/-</li>
        </ul>
      </div>
      <div className="menu-section">
        <h2>Main Dishes</h2>
        <ul className="menu-list">
          <li>Chicken Sandwich - Rs.480/-</li>
          <li>Veggie Wrap - Rs.750/-</li>
          <li>Caesar Salad - Rs700/-</li>
          <li>Avocado Toast - 650/-</li>
          <li>Soup of the Day - Rs.320/-</li>
          <li>Salad - Rs.300/-</li>
          <li>Pizza - Rs.650/-</li>
          <li>Chicken Burger-Rs.350/-</li>
          <li>Pasta - Rs.350/-</li>
          <li>Grilled Fish - Rs.350/-</li>
          <li>Steak - Rs.300/-</li>
          <li>Spaghetti - Rs.350/-</li>
          <li>Lasagna - Rs.350/-</li>
          <li>Salmon - Rs.350/-</li>
         
          <li>Seafood - Rs.350/-</li>
          <li>HotWings - Rs.350/-</li>
        </ul>
      </div>
      
    </div>
    
    </>
  )
}

export default Recipe