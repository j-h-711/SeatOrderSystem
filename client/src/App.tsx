import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MenuDetail from "./pages/MenuDetailPage/MenuDetail";
import CartModal from "./components/CartModal/CartModal";
import ChatModal from "./components/ChatModal/ChatModal";
import OrderCheckModal from "./components/OrderCheckModal/OrderCheckModal";
import AdminPage from "./pages/AdminPage/AdminPage";

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/ordercheck" element={<OrderCheckModal />} />
          <Route path="/cart" element={<CartModal />} />
          <Route path="/chat" element={<ChatModal />} />
        </Routes>
      )}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Navigate to="/menu/all" />} />
        <Route path="/menu/:category" element={<MainPage />} />
        <Route path="/menu/:category/:id" element={<MenuDetail />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default App;
