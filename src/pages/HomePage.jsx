import Post from "../components/Post"
import LeftSideBar from "../components/LeftSideBar"
import RightSideBar from "../components/RightSideBar"
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"
import PostAPI from "../assets/js/post-api/PostAPI"
import { useEffect, useState } from "react"

import CreatePostDesktop from "../components/CreatePostDesktop"

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleClosePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p._id !== postId)) // NOTA PER ME : tengo nello stato tutti quelli con id diverso
  }

  useEffect(() => {
    const postAPI = new PostAPI()

    postAPI
      .getMostRecentPosts()
      .then((posts) => {
        setPosts(posts)
        setError(null)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Errore nel caricamento dei post.")
        setIsLoading(false)
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

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            {isLoading && (
              <div className="d-flex justify-content-center my-4">
                <Spinner animation="border" variant="primary" role="status" />
              </div>
            )}

            {!isLoading && !error && posts.map((singlePost) => <Post key={singlePost._id} post={singlePost} onClose={handleClosePost} />)}
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
