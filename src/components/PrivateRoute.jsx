import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  const { state } = useLocation();

  if (user === null) return null;

  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
