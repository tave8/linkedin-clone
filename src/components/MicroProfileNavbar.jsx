import { useSelector } from "react-redux";

function MicroProfileNavbar() {
  const myProfile = useSelector((state) => state.myProfile);

  return (
    <>
      {/* my profile data */}
      {!myProfile.isLoading && !myProfile.isError && (
        <div className="d-flex flex-column p-4">
          <img src={myProfile.data.image} className="mb-3 rounded-circle" width={80} height={80} style={{ objectFit: "cover" }} />
          <h4>
            {myProfile.data.name} {myProfile.data.surname}
          </h4>
          <h6>{myProfile.data.title}</h6>
          <p className="text-secondary">{myProfile.data.area}</p>
        </div>
      )}

      {/* loading */}
      {myProfile.isLoading && (
        <div>
          <p>loading..</p>
        </div>
      )}

      {/* error */}
      {myProfile.isError && (
        <div>
          <p>error while loading your profile</p>
        </div>
      )}
    </>
  );
}

export default MicroProfileNavbar;
