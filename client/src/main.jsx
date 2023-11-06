import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import AuthPage from "./component/AuthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/Login";
import CompletePage from "./pages/Complete";
import LikePage from "./pages/likePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/complete",
        element: <CompletePage />,
      },
      {
        path: "/yeuthich",
        element: <LikePage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
