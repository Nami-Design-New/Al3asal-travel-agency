import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function MyWallet() {
  const { t } = useTranslation();
  const balance = 2500;
  const transactions = [
    {
      id: 1,
      amount: -400,
      type: "withdraw",
      date: "4 نوفمبر 2025، 4:45 مساء",
      orderId: 5467,
    },
    {
      id: 2,
      amount: 200,
      type: "refund",
      date: "4 نوفمبر 2025، 4:45 مساء",
      orderId: 5467,
    },
    {
      id: 3,
      amount: 800,
      type: "charge",
      date: "4 نوفمبر 2025، 4:45 مساء",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const getIconClass = (type) => {
    switch (type) {
      case "withdraw":
        return "fa-solid fa-money-bill-wave";
      case "refund":
        return "fa-solid fa-rotate-left";
      case "charge":
        return "fa-solid fa-wallet";
      default:
        return "fa-solid fa-question";
    }
  };

  const handleButtonClick = (type) => {
    setTransactionType(type);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setAmount("");
  };

  const handleSubmit = () => {
    console.log(`Processing ${transactionType} of ${amount} $`);
    setShowModal(false);
    setAmount("");
  };

  return (
    <div className="wallet">
      <div className="container">
        <div className="wallet-header">
          <h5> {t("header.wallet")}</h5>
        </div>

        <div className="wallet-balance">
          <div className="shape-left">
            <img src="/icons/plane-shape2.png" alt="Shape Left" />
          </div>
          <div className="shape-right">
            <img src="/icons/plane-shape3.png" alt="Shape Right" />
          </div>
          <p>{t("profile.account")}</p>
          <h1>{balance} EGP</h1>
          <div className="wallet-buttons">
            <button
              className="btn withdraw"
              onClick={() => handleButtonClick("withdraw")}
            >
              <i className="fa-solid fa-download"></i>
              {t("profile.withdrawBalance")}
            </button>
            <button
              className="btn recharge"
              onClick={() => handleButtonClick("charge")}
            >
              <i className="fa-solid fa-plus"></i>{" "}
              {t("profile.rechargeBalance")}
            </button>
          </div>
        </div>

        <div className="wallet-history">
          <h3>{t("profile.transactions")}</h3>
          {transactions.length === 0 ? (
            <p className="no-transactions">لا يوجد معاملات</p>
          ) : (
            transactions.map((t) => (
              <div key={t.id} className={`transaction ${t.type}`}>
                <div className="icon">
                  <i className={getIconClass(t.type)}></i>
                </div>
                <div className="details">
                  <div className="top-row">
                    <span className="type">
                      {t.type === "withdraw"
                        ? "سحب"
                        : t.type === "refund"
                        ? "استرداد"
                        : "شحن"}
                    </span>
                    <span className={`amount ${t.type}`}>
                      {Math.abs(t.amount)} EGP
                    </span>
                  </div>
                  <div className="bottom-row">
                    <span className="date">{t.date}</span>
                    {t.orderId && (
                      <span className="order">طلب رقم #{t.orderId}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal
        show={showModal}
        className="wallet_modal"
        onHide={handleModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {transactionType === "withdraw"
              ? t("profile.withdrawBalance")
              : t("profile.rechargeBalance")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAmount">
              <Form.Label>{t("profile.amount")}</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={t("profile.placeholder")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="custom-btn"
            onClick={handleSubmit}
          >
            {t("profile.confirm")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
