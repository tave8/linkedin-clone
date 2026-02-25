import { Card, Button } from "react-bootstrap"
import ProfileAPI from "../assets/js/profile-api/ProfileAPI"
import { useDispatch, useSelector } from "react-redux"

function SidebarRight() {
  const dispatch = useDispatch()

  const currentApiUser = useSelector((state) => state.myProfile.apiUser)
  const myProfilesData = useSelector((state) => state.myProfiles)
  const myProfilesExceptCurrent = myProfilesData.list.filter((myProfile) => myProfile._apiUser != currentApiUser)

  return (
    <>
      <div className="d-none d-lg-block sidebar-d-scroll" style={{ position: "sticky", top: "80px" }}>
        {/* desktop*/}
        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-bold">LinkedIn Notizie</Card.Title>

            <div>
              <div className="border-bottom py-2">
                Zeekr debutta in Italia
                <div className="text-muted small">2h fa • 1.245 lettori</div>
              </div>
              <div className="border-bottom py-2">
                Più investimenti per gli alberghi italiani
                <div className="text-muted small">7h fa • 1.245 lettori</div>
              </div>
              <div className="border-bottom py-2">
                Milano Cortina, Sport invernali
                <div className="text-muted small">3g fa • 8.122 lettori</div>
              </div>
              <div className="border-bottom py-2">
                L'IA cambia il mercato del lavoro
                <div className="text-muted small">5h fa • 3.410 lettori</div>
              </div>
              <div className="border-bottom py-2">
                Startup italiane: record di finanziamenti nel 2025
                <div className="text-muted small">1g fa • 2.780 lettori</div>
              </div>
              <div className="border-bottom py-2">
                Smart working: nuove normative in arrivo
                <div className="text-muted small">2g fa • 5.093 lettori</div>
              </div>
              <div className="py-2">
                Energia rinnovabile: l'Italia supera gli obiettivi UE
                <div className="text-muted small">3g fa • 6.541 lettori</div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-bold">I tuoi Account</Card.Title>

            {/* profiles except current profile */}
            {!myProfilesData.isLoading &&
              !myProfilesData.isError &&
              myProfilesExceptCurrent.map((profile) => {
                return (
                  <div key={profile._id} className="d-flex align-items-center mb-3">
                    <img
                      src={profile.image || "https://i.pinimg.com/236x/59/32/68/59326808847921f7118ea8fd2d32fa0f.jpg"}
                      alt="profile"
                      className="rounded-circle me-2"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold">
                        {profile.name} {profile.surname}
                      </div>
                      <div className="text-muted small">{profile.title}</div>
                      <Button size="sm" variant="link" className="mt-1 border border-secondary text-muted text-decoration-none">
                        Collegati
                      </Button>
                    </div>
                  </div>
                )
              })}

            {/* is loading */}
            {myProfilesData.isLoading && (
              <div>
                <p>loading...</p>
              </div>
            )}

            {/* is error */}
            {myProfilesData.isError && (
              <div>
                <p>error during my profiles fetch!</p>
              </div>
            )}
          </Card.Body>
        </Card>

        {/* footer */}
        <div className="d text-center p-2" style={{ fontSize: "12px", color: "#666" }}>
          <span className="mx-2">Informazioni</span>
          <span className="mx-2">Accessibilità</span>
          <span className="mx-2">Centro assistenza</span>
          <br />
          <span className="mx-2">Privacy e condizioni</span>
          <span className="mx-2">Opzioni per gli annunci pubblicitari</span>
          <br />
          <div className="mt-2">
            <strong style={{ color: "#0a66c2" }}>Linked</strong>
            <img src="https://marketplace.canva.com/NA4A8/MAGzNvNA4A8/1/tl/canva-linkedin-icon-MAGzNvNA4A8.png" alt="In" style={{ width: "14px" }} />
            Corporation © 2026
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="d-lg-none">
        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-bold" style={{ fontSize: "14px" }}>
              LinkedIn Notizie
            </Card.Title>

            <div>
              <div className="border-bottom py-2" style={{ fontSize: "13px" }}>
                Zeekr debutta in Italia
                <div className="text-muted small">2h fa • 1.245 lettori</div>
              </div>
              <div className="border-bottom py-2" style={{ fontSize: "13px" }}>
                Più investimenti per gli alberghi italiani
                <div className="text-muted small">7h fa • 1.245 lettori</div>
              </div>
              <div className="border-bottom py-2" style={{ fontSize: "13px" }}>
                Milano Cortina, Sport invernali
                <div className="text-muted small">3g fa • 8.122 lettori</div>
              </div>
              <div className="py-2" style={{ fontSize: "13px" }}>
                L'IA cambia il mercato del lavoro
                <div className="text-muted small">5h fa • 3.410 lettori</div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-bold" style={{ fontSize: "14px" }}>
              I tuoi Account
            </Card.Title>

            {/* profiles except current profile */}
            {!myProfilesData.isLoading &&
              !myProfilesData.isError &&
              myProfilesExceptCurrent.map((profile) => {
                return (
                  <div key={profile._id} className="d-flex align-items-center mb-3">
                    <img
                      src={profile.image || "https://i.pinimg.com/236x/59/32/68/59326808847921f7118ea8fd2d32fa0f.jpg"}
                      alt="profile"
                      className="rounded-circle me-2"
                      style={{ width: "45px", height: "45px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: "13px" }}>
                        {profile.name} {profile.surname}
                      </div>
                      <div className="text-muted small">{profile.title}</div>
                      <Button size="sm" variant="link" className="mt-1 border border-secondary text-muted text-decoration-none px-2 py-0">
                        Collegati
                      </Button>
                    </div>
                  </div>
                )
              })}

            {/* is loading */}
            {myProfilesData.isLoading && (
              <div>
                <p>loading...</p>
              </div>
            )}

            {/* is error */}
            {myProfilesData.isError && (
              <div>
                <p>error during my profiles fetch!</p>
              </div>
            )}
          </Card.Body>
        </Card>

        {/* footer mobile */}
        <div className="d-none d-lg-block text-center p-2" style={{ fontSize: "11px", color: "#666" }}>
          <span className="mx-1">Informazioni</span>
          <span className="mx-1">Privacy</span>
          <span className="mx-1">Centro assistenza</span>
          <br />
          <div className="mt-1">
            <strong style={{ color: "#0a66c2" }}>Linked</strong>
            <img src="https://marketplace.canva.com/NA4A8/MAGzNvNA4A8/1/tl/canva-linkedin-icon-MAGzNvNA4A8.png" alt="In" style={{ width: "12px" }} />
            Corporation © 2026
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarRight
