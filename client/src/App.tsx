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
import OrderCheckModal from "./components/OrderCheckModal/OrderCheckModal";

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
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Navigate to="/menu/all" />} />
        <Route path="/menu/:category" element={<MainPage />} />
        <Route path="/menu/:category/:id" element={<MenuDetail />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/ordercheck" element={<OrderCheckModal />} />
          <Route path="/cart" element={<CartModal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
