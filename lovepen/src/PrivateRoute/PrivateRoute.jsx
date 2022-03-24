import { Route, Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../Context/AuthContext"

export function PrivateRoute({ children }) {
  const { isUserLogin } = useAuth();
  let state= useLocation();

  console.log({isUserLogin})

  // return isUserLogin ? (
  //   <Route {...props} path={path} />
  // ) : (
  //   <Navigate state={{ from: path }} replace to="/login" />
  // );

  if (!isUserLogin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: state }} replace />;
  }

  return children;
}

