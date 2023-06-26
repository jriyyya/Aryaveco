import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import { CacheContextProvider } from "./contexts/cacheContext";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductPage from "./pages/ProductsPage/ProductPage";
import useModal from "./hooks/useModal";
import { twMerge } from "tailwind-merge";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <CacheContextProvider>
        <RouterProvider router={router} />
      </CacheContextProvider>
    </GlobalContextProvider>
  );
}

function Root() {
  const modal = useModal();

  return (
    <main className="relative">
      <div
        className={twMerge(
          "fixed left-0 top-0 z-[100] flex h-screen w-full items-center justify-center bg-[#00000045] duration-500",
          modal.element ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {modal.element}
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
