import Offcanvas from "react-bootstrap/Offcanvas";
import MicroProfileNavbar from "./MicroProfileNavbar";
import { GearFill } from "react-bootstrap-icons";

function ProfileOffcanvas({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} className="w-80">
      <div className="d-flex flex-row flex-nowrap justify-content-between align-items-start">
        <MicroProfileNavbar />
        <Offcanvas.Header closeButton></Offcanvas.Header>
      </div>
      <div className="p-4 border-top border-bottom d-flex flex-column justify-content-start">
        <p>
          <strong>16</strong> visitatori del profilo
        </p>
        <p>
          <strong>15</strong> impression del post
        </p>
      </div>
      <Offcanvas.Body className="p-4 fs-5 fw-bold">
        <span className="me-2">
          <GearFill />
        </span>
        Impostazioni
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ProfileOffcanvas;
