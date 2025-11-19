import { Outlet, ScrollRestoration } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "./../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import AuthModal from "../ui/modals/AuthModal";

import useAuth from "../hooks/useAuth";

export default function Layout() {
  const auth = useAuth();

  return auth.loading ? null : (
    <>
      <ScrollRestoration />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ResponsiveNav />
      <AuthModal />
    </>
  );
}
