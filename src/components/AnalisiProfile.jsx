import { Row, Col } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { SiSimpleanalytics } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const AnalisiProfile = () => {
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div>
          <p className="m-0 fs-5 fw-semibold">Analisi</p>
          <p className="d-flex align-items-center m-0">{<FaEye className="me-1" />} Visibile solo a te</p>
        </div>
        <Row>
          <Col xs={12} md={4}>
            <Row className="border-custom-analisi py-3">
              <Col xs={1}>
                <SiSimpleanalytics size={24} />
              </Col>
              <Col xs={11} className="lh-1">
                <p className="m-0 fw-semibold">16 visualizzazioni del profilo</p>
                <p className="m-0 fs-custom-profile-p">Scopri chi ha visitato il tuo profilo</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row className="border-custom-analisi py-3">
              <Col xs={1}>
                <HiMiniUsers size={24} />
              </Col>
              <Col xs={11} className="lh-1">
                <p className="m-0 fw-semibold">0 impressioni dai post</p>
                <p className="m-0 fs-custom-profile-p">crea un post per aumentare l'interesse</p>
                <p className="m-0 fs-custom-profile-p opacity-50">ultimi 7 giorni</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row className="border-custom-analisi py-3">
              <Col xs={1}>
                <FaSearch size={24} />
              </Col>
              <Col xs={11} className="lh-1">
                <p className="m-0 fw-semibold">55 comparse nelle ricerche</p>
                <p className="m-0 fs-custom-profile-p">vedi quante volte il tuo profilo e' comparso nelle ricerche</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center py-3">
          <p className="mb-0">Mostra Tutto {<FaArrowRight />}</p>
        </div>
      </section>
    </>
  );
};
export default AnalisiProfile;
