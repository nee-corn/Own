import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// Layout component
function Root() {
  return <HomePage></HomePage>;
}

export default App;
