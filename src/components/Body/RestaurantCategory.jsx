import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ category, showmenu, setindex }) {
  const handleclick = () => {
    setindex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      <div>
        {console.log(category.itemCards)}
        {showmenu && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
