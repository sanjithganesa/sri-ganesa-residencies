import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import useLenis from "./hooks/useLenis";

import Home from "./pages/Home";
import ApartmentDetails from "./pages/ApartmentDetails";
import Shops from "./pages/Shops";
import ShopDetails from "./pages/ShopDetails";

import CustomCursor from "./components/ui/CustomCursor";

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.35,
        }}
      >

        <Routes location={location}>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/apartments/:slug"
    element={<ApartmentDetails />}
  />

  <Route
    path="/shops"
    element={<Shops />}
  />

  <Route
    path="/shops/:slug"
    element={<ShopDetails />}
  />

</Routes>

      </motion.div>

    </AnimatePresence>
  );
}

function App() {

  useLenis();

  return (
    <BrowserRouter>

      {/* Global Cursor */}
      <CustomCursor />

      {/* Animated Routes */}
      <AnimatedRoutes />

    </BrowserRouter>
  );
}

export default App;