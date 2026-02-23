import { FaPen } from "react-icons/fa";

const InfoProfile = () => {
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 fs-5 fw-semibold">Informazioni</p>
          <FaPen />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit id asperiores, tempora delectus eligendi laudantium quis maiores perferendis
          eveniet dolorum rem voluptatibus! Dolorem, sapiente. Omnis a animi esse ullam.
        </p>
      </section>
    </>
  );
};
export default InfoProfile;
