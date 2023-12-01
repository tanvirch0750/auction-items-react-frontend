import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import Home from './pages/Home';

import Products from './pages/Products';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
