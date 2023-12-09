import { useRoutes, Outlet, Navigate } from "react-router-dom";
import routerPath from "../constants/routerPath";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

export default function useRouters() {
  const routers = useRoutes([
    { path: routerPath.index, index: true, element: <Home /> },
    {
      path: routerPath.index,
      // element: <Outlet />,
      children: [
        {
          path: routerPath.sign_in,
          element: <Auth type="sign_in" />,
        },
      ],
    },
    {
      path: routerPath.index,
      // element: <Outlet />,
      children: [
        {
          path: routerPath.sign_up,
          element: <Auth type="sign_up" />,
        },
      ],
    },
  ]);
  return routers;
}
