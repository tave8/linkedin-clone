import Post from "../components/Post"
import LeftSideBar from "../components/LeftSideBar"
import RightSideBar from "../components/RightSideBar"
import { Container, Row, Col } from "react-bootstrap"
import PostAPI from "../assets/js/post-api/PostAPI"
import { useEffect, useState } from "react"

import CreatePostDesktop from "../components/CreatePostDesktop"

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const handleClosePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p._id !== postId)) // NOTA PER ME : tengo nello stato tutti quelli con id diverso
  }

  useEffect(() => {
    const postAPI = new PostAPI()

    postAPI
      .getMostRecentPosts()
      .then((posts) => {
        console.log("posts:", posts)
        setPosts(posts) // salvo
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <main className="sfondo">
      <Container className="pt-3" fluid>
        <Row>
          <Col className="d-none d-lg-block" md={3}>
            <LeftSideBar />
          </Col>
          <Col xs={12} md={6}>
            <CreatePostDesktop />
            {/* <Post /> */}
            {posts.map((singlePost) => (
              <Post key={singlePost._id} post={singlePost} onClose={handleClosePost} />
            ))}
          </Col>

          <Col className="d-none d-md-block" md={3}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
export default HomePage
