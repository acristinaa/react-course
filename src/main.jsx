import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./components/routes/Posts";
import "./index.css";
import NewPost from "./components/routes/NewPost";
import RootLayout from "./components/routes/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
