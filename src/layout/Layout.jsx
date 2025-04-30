import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "./../ui/layout/Footer";
import AuthModal from "../ui/modals/AuthModal";

export default function Layout() {
  const loacation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loacation]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}
