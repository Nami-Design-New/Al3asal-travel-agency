import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useAuthStore from "../stores/authStore";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthed } = useAuth();
  const { openAuthModal } = useAuthStore();

  useEffect(() => {
    if (!isAuthed) {
      openAuthModal(true);
    }
  }, [isAuthed]);

  if (!isAuthed) {
    return null;
  }

  return <>{children}</>;
}
