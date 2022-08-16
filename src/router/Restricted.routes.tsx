import { FC } from "react";
import { Navigate, Outlet, RouteProps, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectAllPermissions } from "../store/apiSlice/permissionSlice";

const RestrictedRoute: FC<RouteProps> = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const permissions = useAppSelector(selectAllPermissions);
debugger
  let location = useLocation();

  const permittedRoutes: { [x: string]: boolean } = {};
  permissions.forEach((permission) => {
    if (permission.route === location.pathname) {
      permittedRoutes[permission.route] = true;
    }
  });

  if (isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (!permittedRoutes[location.pathname])
    return <Navigate to="/page-not-found" />;

  return <Outlet />;
};

export default RestrictedRoute;
