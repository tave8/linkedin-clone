import { Form, Button, Image, Row, Col, Dropdown, Spinner, Alert } from "react-bootstrap"
import CommentAPI from "../assets/js/comment-api/CommentAPI"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const PostComments = (props) => {
  const [comments, setComments] = useState([]) //PRENDO
  const [newComment, setNewComment] = useState("") // METTO
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const myProfile = useSelector((state) => state.myProfile) //per foto profilo redux

  useEffect(() => {
    // PER PRENDERE
    const commentAPI = new CommentAPI()
    // console.log(commentAPI)

    commentAPI
      .getMostRecentCommentsOfPost(props.postId)
      .then((commentsFromAPI) => {
        setComments(commentsFromAPI)
        console.log(commentsFromAPI)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Errore nel caricamento dei commenti.")
        setIsLoading(false)
      })
  }, [props.postId])

  // FINE PRENDERE

  //PER METTERE

  const handleAddComment = (e) => {
    e.preventDefault()

    const commentAPI = new CommentAPI({
      // add the comment as the current profile
      // note: because we are passing the postId,
      // I'm not sure if this is actually needed,
      // but I'm specifying the current profile for
      // consistency and correctness
      apiUser: myProfile.apiUser,
    })

    const newCommentFields = {
      comment: newComment,
      postId: props.postId,
    }

    commentAPI
      .addComment(newCommentFields)
      .then((createdComment) => {
        // AGGIUNGO DA FUNZIONE GIUSEPPE PER POTER AGGIORNARE LA LISTA
        setComments((prev) => [createdComment, ...prev])
        setNewComment("")
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // FINE METTERE

  // PER TOGLIERE

  const handleDeleteComment = (commentId) => {
    const commentAPI = new CommentAPI()

    commentAPI
      .deleteCommentById(commentId)
      .then(() => {
        // rimuovo dallo state
        setComments((prev) => prev.filter((c) => c._id !== commentId))
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="px-3 pb-3 mt-2">
      {/* INPUT COMMENTO */}
      <div className="position-relative mb-3">
        <form onSubmit={handleAddComment} className="position-relative mb-3">
          <Form.Control
            type="text"
            placeholder="Aggiungi un commento..."
            className="rounded-pill  comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </form>
        <div className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center me-3 gap-2">
          <i className="bi bi-emoji-smile text-muted"></i>
          <i className="bi bi-image text-muted"></i>
        </div>
      </div>

      {/* FILTRO COMMENTI */}
      <div className="small fw-semibold text-muted mb-2" style={{ cursor: "pointer" }}>
        Più rilevanti ▾
      </div>
      {error && (
        <Alert variant="danger" className="mt-2">
          {error}
        </Alert>
      )}

      {/* LOADING COMMENTI */}
      {isLoading && (
        <div className="d-flex justify-content-center my-3">
          <Spinner animation="border" variant="primary" role="status" />
        </div>
      )}
      {/* COMMENTO HEADER*/}
      {!isLoading &&
        !error &&
        comments.map((comment) => (
          <div className="mt-3" key={comment._id}>
            <Row className="align-items-start g-2 flex-nowrap comment-head">
              <Col xs="auto">
                <Image
                  src={myProfile.data?.image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                  roundedCircle
                  width={40}
                  height={40}
                  alt="Avatar"
                />
              </Col>

              <Col className="min-w-0">
                <div className="fw-semibold lh-sm d-flex align-items-center gap-2 flex-wrap mb-1">
                  <span className="text-truncate comment-author"> {comment.author?.split("@")[0]}</span>
                  <i className="bi bi-linkedin text-warning small"></i>
                  <span className="text-muted small">• 2°</span>
                </div>

                <div className="text-muted  lh-sm text-truncate comment-date">{comment.createdAtForUI}</div>
              </Col>

              <Col xs="auto" className="d-flex align-items-start ms-auto flex-shrink-0">
                <div className="d-flex align-items-center gap-2">
                  <Dropdown align="end">
                    <Dropdown.Toggle as={Button} variant="link" className="p-0 text-muted no-caret custom-toggle">
                      <i className="bi bi-three-dots"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleDeleteComment(comment._id)}>Elimina</Dropdown.Item>
                      <Dropdown.Item>Nascondi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>

            <Row className=" ps-2 smallmargin2">
              <Col className="min-w-0">
                <div className="small mb-2">{comment.comment}</div>

                <div className="d-flex flex-wrap align-items-center gap-2 text-muted small">
                  <span className="fw-semibold" role="button">
                    Consiglia
                  </span>

                  <span>•</span>

                  <span className="d-flex align-items-center gap-1">
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>3</span>
                  </span>

                  <span className="fw-semibold" role="button">
                    Rispondi
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  )
}

export default PostComments
