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

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Apartment Details */}
          <Route
            path="/apartments/:slug"
            element={<ApartmentDetails />}
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