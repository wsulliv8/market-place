import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <>
            <ScrollToTop />
            <HomePage />
          </>
        ),
      },
      {
        path: "shop",
        element: (
          <>
            <ScrollToTop />
            <ShopPage />
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <ScrollToTop />
            <AboutPage />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
