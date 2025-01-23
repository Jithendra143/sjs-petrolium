import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import UserSettings from "./pages/UserSettings";
import ErrorPage from "./pages/ErrorPage";
import Disel from "./pages/Disel";
import Petrol from "./pages/Petrol";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "user-settings", element: <UserSettings /> },
      {
        path: "sales",
        children: [
          { path: "disel", element: <Disel /> },
          { path: "petrol", element: <Petrol /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
