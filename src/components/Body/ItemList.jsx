import React from "react";

function ItemList({ items }) {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div>
      {console.log(items)}
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border border-b-3 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            <div className="absolute ">
              <button className="bg-black text-white mx-14 rounded-lg shadow-sm">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
