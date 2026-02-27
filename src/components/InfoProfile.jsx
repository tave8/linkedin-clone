import { FaPen } from "react-icons/fa"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import { useRef, useState } from "react"
import ProfileAPI from "../assets/js/profile-api/ProfileAPI"
import { useDispatch, useSelector } from "react-redux"
import { setMyProfileDataGlobally } from "../redux/actions"

const InfoProfile = () => {
  const dispatch = useDispatch()

  const myProfile = useSelector((state) => state.myProfile)
  const [modalShow, setModalShow] = useState(false)
  const bioRef = useRef("")
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Informazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            onChange={(event) => {
              bioRef.current = event.target.value
            }}
            className="w-100"
            placeholder="Change your info"
            name="change info"
            value={bioRef.current}
            style={{
              resize: "none",
              outline: "none",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              console.log(bioRef.current)
              const profileAPI = new ProfileAPI({
                apiUser: myProfile.apiUser,
              })
              const newProfileFields = {
                bio: bioRef.current,
                // more fields if needed
              }
              profileAPI
                .updateMyProfile(newProfileFields)
                .then((profile) => {
                  dispatch(setMyProfileDataGlobally(profile))
                })
                .catch((err) => {
                  console.error(err)
                })
              setModalShow(false)
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 fs-5 fw-semibold">Informazioni</p>
          <Button onClick={() => setModalShow(true)} className=" p-0 d-flex justify-content-center align-items-center  border border-0 bg-transparent ">
            <FaPen color="black" size={15} />
          </Button>
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <div>
          {/* added by giuseppe: allows text whitespace to be displayed correctly */}
          <pre
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "0.9rem",
              width: "100%",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            {myProfile.data.bio}
          </pre>
        </div>
      </section>
    </>
  )
}
export default InfoProfile
