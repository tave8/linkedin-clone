import { FaPen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const ServicesProfile = () => {
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="m-0 fs-5 fw-semibold">Servizi</p>
          <FaPen />
        </div>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-2 py-1">consulenza marketing</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">consulenza politica</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">brand marketing</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">content strategy</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">content marketing</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">marketing sui social media</p>
          <p className="fs-custom-profile-p text-nowrap mb-0 border-custom-serviceProfile px-1 py-1">strategia di marketing</p>
        </div>
        <div className="d-flex justify-content-center align-items-center py-3 border-top border-1 border-secondary-subtle">
          <p className="mb-0">Mostra Tutto {<FaArrowRight />}</p>
        </div>
      </section>
    </>
  );
};
export default ServicesProfile;
