import { useRoutes, Outlet, Navigate } from "react-router-dom";
import routerPath from "../constants/routerPath";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Main from "../pages/Main";
export default function useRouters() {
  const routers = useRoutes([
    { path: routerPath.index, index: true, element: <Home /> },
    {
      path: routerPath.index,
      children: [
        {
          path: routerPath.sign_in,
          element: <Auth type="sign_in" />,
        },
      ],
    },
    {
      path: routerPath.index,
      children: [
        {
          path: routerPath.sign_up,
          element: <Auth type="sign_up" />,
        },
      ],
    },
    {
      path: routerPath.index,
      children: [
        {
          path: routerPath.upload,
          element: (
            <MainLayout page="upload">
              <Main />
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: routerPath.index,
      children: [
        {
          path: routerPath.your_files,
          element: <MainLayout page="your-files"></MainLayout>,
        },
      ],
    },
  ]);
  return routers;
}
