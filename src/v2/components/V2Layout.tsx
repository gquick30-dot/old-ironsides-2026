import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function V2Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />

      {/* Homepage hero already accounts for the fixed header */}
      {!isHome && <div className="h-[148px] lg:h-[180px]" />}

      <Outlet />
    </>
  );
}
