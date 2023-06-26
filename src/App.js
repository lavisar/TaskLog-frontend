import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLogin from "./pages/user/UserLogin";
import UserSignUp from "./pages/user/UserSignUp";
import ErrorPage from "./pages/shared/ErrorPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminMain from "./pages/admin/AdminMain";
import RequireAdminAuth from "./pages/shared/RequireAdminAuth";
import AdminLayout from "./components/AdminLayout";
import UsersList from "./pages/admin/UsersList";
import SplashPage from "./pages/user/SplashPage";
import UserTeams from "./pages/user/UserTeams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <UserLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <UserSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teams",
    element: <UserTeams />,
    errorElement: <ErrorPage />,
  },

  // Links for ADMIN
  {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <RequireAdminAuth>
        <AdminLayout />
      </RequireAdminAuth>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminMain />,
      },
      {
        path: "/admin/account",
        element: <AdminMain />,
      },
      {
        path: "/admin/all-users",
        element: <UsersList />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
