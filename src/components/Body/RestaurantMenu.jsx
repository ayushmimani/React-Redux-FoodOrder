import Shimmer from "../shimmerLoader/Shimmerui";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  const { resid } = useParams();
  const [categoryindex, setcategoryindex] = useState(null);
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // fetch menu api it is custom hook
  const resinfo = useRestaurantMenu(resid);

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  // get menu categories
  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">{`${cuisines.join(
        ", "
      )} - ${costForTwoMessage}`}</p>
      <ul>
        {categories.map((item, index) => (
          <li key={item.card.card.title}>
            <RestaurantCategory
              category={item.card.card}
              CDN_URL={CDN_URL}
              showmenu={categoryindex === index ? true : false}
              setindex={() => setcategoryindex(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
