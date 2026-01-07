import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <div className="w-full h-dvh">
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Protected Route with login*/}
          <Route path="/" element={<HomePage />} />
          {/* Prodtect Route Just Admin */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
