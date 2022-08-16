import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "../config";
import RestrictedRoute from "./Restricted.routes";

const Layout = lazy(() => import("../layout").then());
const PageNotFount = lazy(() => import("../page/PageNotFound").then());

const LoginPage = lazy(() => import("../page/Authentication/LoginPage").then());

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            {appRoutes.map(({ id, path, Component }) => (
              <Route element={<RestrictedRoute />}>
                <Route key={id} path={path} element={<Component />} />
              </Route>
            ))}
          </Route>
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
