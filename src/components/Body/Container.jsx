import Restaurantbody from "./Restaurantbody";
import useOnlineStatus from "../Utils/useOnlineStatus";

function Container() {
  const OnlineStatus = useOnlineStatus();
  console.log(OnlineStatus);

  return (
    <div className="container">
      {OnlineStatus ? (
        <Restaurantbody />
      ) : (
        "oops Please check internet coneection"
      )}
    </div>
  );
}

export default Container;
