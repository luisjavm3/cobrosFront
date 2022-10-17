import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import RootLayout from "../Components/RootLayout";
import ProtectedRoute from "./ProtectedRoute";
import Liquidacion from "../Pages/Liquidacion";
import CobroList from "../Pages/CobroList";
import CobroDetails from "../Pages/CobroDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route path="cobros" element={<CobroList />} />
          <Route path="cobros/:id" element={<CobroDetails />} />
          <Route path="cobros/:id/liquidacion" element={<Liquidacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
