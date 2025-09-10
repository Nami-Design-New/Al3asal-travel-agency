import { RouterProvider } from "react-router";
import { router } from "./providers/router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import useSettingsStore from "./stores/settingsStore";
import i18n from "./utils/i18n";

function App() {
  const { lang } = useSettingsStore((state) => state);

  useEffect(() => {
    localStorage.setItem("i18nextLng", lang);

    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <Toaster expand={false} richColors position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
