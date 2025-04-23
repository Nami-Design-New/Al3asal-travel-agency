import { Outlet } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "./../ui/layout/Footer";
import AuthModal from "../ui/modals/AuthModal";

export default function Layout() {
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
