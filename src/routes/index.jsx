import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider }  from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/"  exact element={<Checkout />} />
    </Route>
  )
);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;