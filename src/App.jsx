import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import UserSettings from "./pages/UserSettings";
import CollectCash from './pages/CollectCash';
import Disel from "./pages/Disel";
import Petrol from "./pages/Petrol";

const router = createHashRouter([
  {
    path: "/",
    id: "root",
    element: <Layout />, // Layout page
    children: [
      { index: true, id: "dashboard", element: <Dashboard /> }, // Default route
      { path: "user-settings", element: <UserSettings /> },
      {
        path: "sales",
        children: [
          { path: "disel", element: <Disel /> }, // Diesel route
          { path: "petrol", element: <Petrol /> }, // Petrol route
        ],
      },
      {path: "collect-cash", element: <CollectCash />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
