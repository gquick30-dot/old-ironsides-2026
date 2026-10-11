import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function V2Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />

      {/* Non-home pages need only enough space to clear the fixed header */}
      {!isHome && <div className="h-[116px] lg:h-[126px]" />}

      <Outlet />
    </>
  );
}