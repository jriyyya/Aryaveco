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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/0" element={<div />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />;
    </GlobalContextProvider>
  );
}

function Root() {
  return (
    <main className="relative">
      <div className="bg-[url('/images/hero.png')] h-screen absolute top-0 left-0 w-screen -z-10" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
