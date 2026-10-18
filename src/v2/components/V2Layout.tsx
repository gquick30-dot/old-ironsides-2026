import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

type V2LayoutProps = {
  cartCount?: number;
};
export default function V2Layout({ cartCount = 0 }: V2LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Header cartCount={cartCount} />
      {!isHome && <div className="h-[90px] lg:h-[126px]" />}
      <Outlet />
      <Footer />
    </>
  );
}
