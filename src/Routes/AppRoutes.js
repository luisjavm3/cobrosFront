import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import RootLayout from "../Components/RootLayout";
import ProtectedRoute from "./ProtectedRoute";
import Cobros from "../Pages/Cobros";
import Liquidacion from "../Pages/Liquidacion";

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
          <Route path="cobros" element={<Cobros />}>
            <Route path=":id" element={<Cobros />}></Route>
            <Route path="liquidacion" element={<Liquidacion />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
