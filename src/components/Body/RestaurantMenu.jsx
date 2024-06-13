import Shimmer from "../shimmerLoader/Shimmerui";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resid } = useParams();
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // fetch menu api it is custom hook
  const resinfo = useRestaurantMenu(resid);

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;
  //   get name of restaurant cuisiens

  //   get menu
  const itemCards =
    resinfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log(itemCards[0].card);
  return (
    <div className="Restaurantmenu">
      <h1>{name}</h1>
      <p>{`${cuisines} - ${costForTwoMessage}`}</p>
      <h2>Menu</h2>
      <ul>
        {/* {itemCards.map((item) => {
          <li key={item.card.info.name}>{item.card.info.name}</li>;
        })} */}

        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            <h2>{item.card.info.name}</h2>
            <img className="menuimage" src={CDN_URL + item.card.info.imageId} />
            <strong>Rs- {item.card.info.defaultPrice / 100 || 350}</strong>
            <p>Rating - {item.card.info.ratings.aggregatedRating.rating}</p>
            <p>{item.card.info.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
