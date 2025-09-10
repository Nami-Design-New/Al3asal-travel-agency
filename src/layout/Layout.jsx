import { Outlet, ScrollRestoration } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "./../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import AuthModal from "../ui/modals/AuthModal";

export default function Layout() {
  return (
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
