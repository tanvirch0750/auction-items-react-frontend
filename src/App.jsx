import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import Home from './pages/Home';

import PrivateRoute from './components/ui/PrivateRoute';
import PublicRoute from './components/ui/PublicRoute';
import useAuthCheck from './hooks/useAuthCheck';
import AuctionRoom from './pages/AuctionRoom';
import CreateProduct from './pages/CreateProduct';
import Products from './pages/Products';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  const authCheck = useAuthCheck();
  return !authCheck ? (
    <p>Loading...</p>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route
              path="products/:id"
              element={
                <PrivateRoute>
                  <AuctionRoom />
                </PrivateRoute>
              }
            />
            <Route
              path="create-product"
              element={
                <PrivateRoute>
                  <CreateProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="signin"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
