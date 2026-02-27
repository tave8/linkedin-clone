import React from "react";
import { FaPen } from "react-icons/fa";
import { FaArrowRight, FaRecycle, FaLocationArrow } from "react-icons/fa6";
import { Button, Row, Col } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { FaRegCommentDots } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostAPI from "../assets/js/post-api/PostAPI";
import ModalModDelPost from "./ModalModDelPost";

const ActivityProfile = () => {
  const [modalShowChange, setModalShowChange] = React.useState(false);
  const myProfile = useSelector((state) => state.myProfile);
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const myProfileId = useSelector((state) => state.myProfile.data?._id);

  useEffect(() => {
    if (!myProfileId) return;
    const postAPI = new PostAPI({ apiUser: myProfileId });
    postAPI
      .getMostRecentPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  }, [myProfileId]);

  const myPosts = posts.filter((el) => el.user?._id === myProfile.data?._id);
  const statoCompleto = useSelector((state) => state);
  console.log("CONTENUTO REDUX:", statoCompleto);
  return (
    <section className="bg-white border border-1 border-secondary-subtle rounded-3 container pt-3 pb-2 mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0 fs-5 fw-semibold">Attività</p>
        <div className="d-flex align-items-center gap-3">
          <Button className="border border-success text-success bg-white rounded-pill px-3">Disponibile per</Button>
          <FaPen />
        </div>
      </div>

      <p className="mb-2 text-primary fw-semibold">{myProfile.data?.followers?.length || "1.335"} follower</p>

      <div className="d-flex gap-2 mb-3">
        <Button className="rounded-pill px-3 fw-semibold border-0 bg-success text-white">Post</Button>
        <Button className="rounded-pill px-3 fw-semibold border border-secondary text-dark bg-white">Commenti</Button>
      </div>

      <Row className="g-3">
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : myPosts.length === 0 ? (
          <p>Nessun post recente trovato.</p>
        ) : (
          myPosts.map((singlePost) => (
            <Col key={singlePost._id} xs={12}>
              <div className="border border-1 border-secondary-subtle rounded-3 p-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={myProfile.data?.image} width={45} height={45} className="rounded-circle" style={{ objectFit: "cover" }} alt="profile" />
                    <div>
                      <p className="fw-semibold mb-0">
                        {myProfile.data?.name} {myProfile.data?.surname}
                      </p>
                      <small className="text-muted">Ha pubblicato questo post</small>
                    </div>
                  </div>
                  <Button
                    variant="light"
                    onClick={() => {
                      setSelectedPostId(singlePost._id);
                      setModalShowChange(true);
                    }}
                  >
                    {" "}
                    <BsThreeDots />
                  </Button>
                </div>
                <p className="mb-2">{singlePost.text}</p>
                {singlePost.image && (
                  <img src={singlePost.image} alt="post" className="w-100 rounded mb-2" style={{ objectFit: "cover", maxHeight: "400px" }} />
                )}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted">{singlePost.likes?.length || 0} Mi piace</small>
                </div>
                <div className="d-flex justify-content-around mt-3 border-top pt-3 text-secondary">
                  <div className="d-flex align-items-center gap-1">
                    <HiArchiveBoxArrowDown />
                    <small>Salva</small>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaRecycle />
                    <small>Ripubblica</small>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaRegCommentDots />
                    <small>Commenta</small>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaLocationArrow />
                    <small>Invia</small>
                  </div>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
      <ModalModDelPost show={modalShowChange} onHide={() => setModalShowChange(false)} postId={selectedPostId} />

      <div className="d-flex justify-content-center align-items-center py-3 border-top mt-4">
        <p className="mb-0 fw-semibold">
          Mostra tutto <FaArrowRight />
        </p>
      </div>
    </section>
  );
};

export default ActivityProfile;
