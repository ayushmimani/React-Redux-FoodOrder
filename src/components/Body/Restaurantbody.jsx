import { useContext, useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "../shimmerLoader/Shimmerui";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

function Restaurantbody() {
  const [listdata, setlistdata] = useState([]);
  const [filterrest, setfilterrest] = useState([]);
  const [searchlist, setsearchlist] = useState("");
  const { username, setuserinfo } = useContext(UserContext);

  // const list = [
  //   {
  //     name: "28 Spice Club",
  //     avgRating: 4.0,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "29 Spice Club",
  //     avgRating: 3.6,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "23 Spice Club",
  //     avgRating: 4.3,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "20 Spice Club",
  //     avgRating: 3.2,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "30 Spice Club",
  //     avgRating: 4.2,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "280 Spice Club",
  //     avgRating: 1.2,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "281 Spice Club",
  //     avgRating: 3.1,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "282 Spice Club",
  //     avgRating: 4.4,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "286 Spice Club",
  //     avgRating: 3.9,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "258 Spice Club",
  //     avgRating: 2.9,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "218 Spice Club",
  //     avgRating: 4.1,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  //   {
  //     name: "128 Spice Club",
  //     avgRating: 3.2,
  //     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  //     cuisines: [
  //       "North Indian",
  //       "South Indian",
  //       "Chinese",
  //       "Beverages",
  //       "Fast Food",
  //       "Desserts",
  //     ],
  //   },
  // ];

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //
    const jsondata = await data.json();
    const cardsinfo =
      jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setlistdata(cardsinfo);
    setfilterrest(cardsinfo);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const filterrestaurant = (listdata) => {
    setfilterrest(listdata.filter((toprest) => toprest.info.avgRating >= 4));
  };
  if (listdata.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => setsearchlist(e.target.value)}
            value={searchlist}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterlist = listdata.filter((res) =>
                res.info.name.toLowerCase().includes(searchlist.toLowerCase())
              );
              setfilterrest(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => filterrestaurant(listdata)}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="flex items-center ml-4">
          <input
            className="border-solid border-black"
            type="text"
            value={username}
            onChange={(e) => setuserinfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterrest.map((restaurant) => (
          <Link key={restaurant.info.id} to={"menu/" + restaurant.info.id}>
            <Restaurantcard restdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurantbody;
