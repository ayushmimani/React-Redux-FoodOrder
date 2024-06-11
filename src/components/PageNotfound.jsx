import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Page not found</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
}

export default PageNotFound;
