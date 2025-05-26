import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Propos } from "./pages/Propos";
// import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/a_propos",
          element: <Propos />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// Layout component
function Root() {
  return <Outlet />;
}

export default App;
