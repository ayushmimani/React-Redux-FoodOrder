// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [OnlineStatus, setOnlineStatus] = useState(true);
//   useEffect(() => {
//     window.addEventListener("onLine", () => {
//       setOnlineStatus(true);
//     });
//     window.addEventListener("offLine", () => {
//       setOnlineStatus(false);
//     });
//     console.log(OnlineStatus);
//   }, []);

//   return OnlineStatus;
// };

// export default useOnlineStatus;

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  console.log(onlineStatus);

  return onlineStatus;
};

export default useOnlineStatus;
