import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchdata();
  }, []);
  const [resinfo, setresinfo] = useState(null);
  const menu_api =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.488172&lng=78.3879387&restaurantId=" +
    resId;

  const fetchdata = async () => {
    const data = await fetch(menu_api);
    const jsondata = await data.json();
    setresinfo(jsondata.data);
  };
  return resinfo;
};

export default useRestaurantMenu;
