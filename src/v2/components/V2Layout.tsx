import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default function V2Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Header />

      {!isHome && <div className="h-[116px] lg:h-[126px]" />}

      <Outlet />
    </>
  );
}