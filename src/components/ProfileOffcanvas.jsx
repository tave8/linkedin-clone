import Offcanvas from "react-bootstrap/Offcanvas";
import MicroProfileNavbar from "./MicroProfileNavbar";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function ProfileOffcanvas({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} className="w-80">
      <div className="d-flex flex-row flex-nowrap justify-content-between align-items-start">
        <Link
          to="/Profile"
          onClick={() => {
            handleClose();
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MicroProfileNavbar />
        </Link>
        <Offcanvas.Header closeButton></Offcanvas.Header>
      </div>
      <div className="p-4 border-top border-bottom d-flex flex-column justify-content-start">
        <p>
          <span className="text-primary fw-bold">16</span> visitatori del profilo
        </p>
        <p>
          <span className="text-primary fw-bold">15</span> impression del post
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
