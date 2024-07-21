import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About/About";

import NotFound404 from "./Pages/NotFound404";

const routeDefinitions = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
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
