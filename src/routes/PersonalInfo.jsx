import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProfileInfoForm from "../components/auth/profile/ProfileInfoForm";
import PassportInfoForm from "../components/auth/profile/PassportInfoForm";
import ConfirmDeleteModal from "../ui/modals/ConfirmDeleteModal";
import useDeleteAccount from "../hooks/useDeleteAccount";

export default function PersonalInfo() {
  const { t } = useTranslation();
  const [open, setOpen] = useState();
  const { isPending, mutate } = useDeleteAccount();

  return (
    <>
      <ProfileInfoForm />
      <PassportInfoForm />

      <button className="delete_account" onClick={() => setOpen(true)}>
        <i className="fa-regular fa-trash"></i>
        {t("profile.deleteAccount")}
      </button>

      <ConfirmDeleteModal
        closeDeleteModal={() => setOpen(false)}
        loading={isPending}
        show={open}
        text={t("sureYouWantDeleteYourAccount")}
        onConfirm={mutate}
      />
    </>
  );
}
