import { useTranslation } from "react-i18next";
import { Link, useRouteError, isRouteErrorResponse } from "react-router";

export default function Error() {
  const error = useRouteError();
  const { t } = useTranslation();

  const getErrorDetails = () => {
    if (isRouteErrorResponse(error)) {
      return {
        status: error.status,
        title:
          error.status === 404
            ? "errorPage.pageNotFoundTitle"
            : "errorPage.errorTitle",
        message:
          error.status === 404
            ? "errorPage.pageNotFoundMessage"
            : "errorPage.applicationErrorMessage",
      };
    }

    if (error instanceof Error) {
      return {
        status: 500,
        title: "errorPage.applicationErrorTitle",
        message: "errorPage.applicationErrorMessage",
      };
    }

    return {
      status: 500,
      title: "errorPage.unexpectedErrorTitle",
      message: "errorPage.unexpectedErrorMessage",
    };
  };

  const { status, title, message } = getErrorDetails();

  return (
    <div className="error-page">
      <div className="container">
        <img src="/icons/error.svg" alt={`Error ${status}`} />

        <h1 className="error-title">
          {t("errorPage.oops")} {t(title)} ({status})
        </h1>

        <p className="error-description">{t(message)}</p>

        <Link to="/">{t("errorPage.returnToHome")}</Link>
      </div>
    </div>
  );
}
