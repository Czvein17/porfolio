import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import NotFound404 from "./Pages/NotFound404";

const routeDefinitions = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/about" element={<Projects />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    <Route path="*" element={<NotFound404 />} />
  </>
);

const router = createBrowserRouter(routeDefinitions);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
