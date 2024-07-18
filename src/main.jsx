import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ItinerarieForm from "./pages/ItinerarieForm.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { VITE_GOOGLE_AUTHENTICATION_CLIENT_ID } from "./utils/constent.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-itineraries",
        element: <ItinerarieForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_AUTHENTICATION_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
