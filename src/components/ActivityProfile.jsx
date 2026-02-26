import { FaPen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Button, Row, Col } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { FaRecycle } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { useEffect, useState } from "react";

import PostAPI from "../assets/js/post-api/PostAPI";

const ActivityProfile = (props) => {
  const myProfile = props.profile;
  const [post, setPosts] = useState([]);
  console.log("prop", props.profile);
  console.log("profile", myProfile);
  useEffect(() => {
    const postAPI = new PostAPI();

    postAPI
      .getPosts()
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //returnnr
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 fs-5 fw-semibold">Attività</p>
          <div className="d-flex align-items-center gap-3">
            <Button className=" btn-profile-firstSection border-custom-bt-firstSection ">Disponibile per</Button>
            <FaPen />
          </div>
        </div>
        <p className="mb-0 blu-profile-p fw-semibold">1.335 follower</p>
        <div className="d-flex justify-content-start gap-2 mt-2">
          <Button className="border-custom-bt-activity border-0">Post</Button>
          <Button className="border-custom-bt-activity2">Comments</Button>
        </div>
        <Row className="mt-3 justify-content-center gap-3">
          {post.length === 0 ? (
            <p>Loading...</p>
          ) : (
            post
              .filter((el) => el.user._id === myProfile.data._id)
              .map((singlePost) => (
                <Col key={singlePost._id} xs={12} md={5} className="border border-1 border-secondary-subtle rounded-3 p-2">
                  <div className="d-flex justify-content-between">
                    <p className="fw-semibold mb-0 fs-custom-m w-custom-p-activity">
                      {props.profile.data.name}
                      <span className="fw-normal"> ha diffuso questo post</span>
                    </p>
                    <BsThreeDots size={10} />
                  </div>

                  <p className="fs-custom-m mb-0">{singlePost.text}</p>

                  {singlePost.image && <img src={singlePost.image} alt="foto post" className="w-100" />}

                  <Row className="justify-content-between mt-5">
                    <Col xs={5}>
                      <p className="mb-0 fs-custom-profile-p ">{singlePost.likes?.length || 0}</p>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-around mt-3 border-top border-0 border-secondary-subtle py-3">
                    <HiArchiveBoxArrowDown size={10} />
                    <FaRecycle size={10} />
                    <FaRegCommentDots size={10} />
                    <FaLocationArrow size={10} />
                  </div>
                </Col>
              ))
          )}
        </Row>
        <div className="d-flex justify-content-center align-items-center py-3 border-top border-1 border-secondary-subtle mt-5">
          <p className="mb-0">Mostra Tutto {<FaArrowRight />}</p>
        </div>
      </section>
    </>
  );
};
export default ActivityProfile;
