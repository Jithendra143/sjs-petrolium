import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import UserSettings from "./pages/UserSettings";

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <Dashboard />},
    {path: 'user-settings', element: <UserSettings />}
  ]}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
