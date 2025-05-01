import CheckoutForm from "../components/checkout/CheckoutForm";
import PriceDetailes from "../components/checkout/PriceDetailes";

export default function Checkout() {
  return (
    <section className="checkout_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 co-12 p-2">
            <CheckoutForm />
          </div>
          <div className="col-lg-3 col-12 p-2">
            <PriceDetailes />
          </div>
        </div>
      </div>
    </section>
  );
}
