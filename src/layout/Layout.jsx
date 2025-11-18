import { Outlet, ScrollRestoration } from "react-router";
import { useCookies } from "react-cookie";
import Header from "../ui/layout/Header";
import Footer from "./../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import AuthModal from "../ui/modals/AuthModal";
import useGetProfile from "../hooks/useGetProfile";
import { useEffect } from "react";
import { useAuthedUserStore } from "../stores/authedUser";

export default function Layout() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const { setAuthedUser } = useAuthedUserStore();
  const { data: profile } = useGetProfile(!!token);

  useEffect(() => {
    if (profile?.id) {
      setAuthedUser(profile);
    }
  }, [profile, setAuthedUser]);

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
