import useGetFaqs from "../hooks/useGetFaqs";
import { Accordion } from "react-bootstrap";

export default function FAQ() {
  const { data } = useGetFaqs();

  return (
    <section className="faq_section">
      <img
        src="/icons/plane-shape2.png"
        alt="Shape"
        className="faq-shape d-none d-md-block"
      />

      <img src="/icons/plane-shape3.png" alt="Shape" className="faq-shape2" />

      <div className="container">
        <div className="section_title mb-5 text-center">
          <h2>{data?.title || ""}</h2>
          <p>{data?.content || ""}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <Accordion defaultActiveKey={0}>
              {data?.data?.map((item) => (
                <Accordion.Item eventKey={item?.id} key={item?.id}>
                  <Accordion.Header>{item?.question}</Accordion.Header>
                  <Accordion.Body>
                    <p> {item?.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
