import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function V2Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Header />
      {!isHome && <div className="h-[90px] lg:h-[126px]" />}
      <Outlet />
      <Footer />
    </>
  );
}
