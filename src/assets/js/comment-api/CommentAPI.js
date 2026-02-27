import APIHelper from "../APIHelper"

const defaultParams = {
  apiUser: "team",
}

export default class CommentAPI extends APIHelper {
  static API_URL_COMMENTS = "https://striveschool-api.herokuapp.com/api/comments"

  /**
   * These are API users for the comments endpoint,
   * and they are different from the the "shared" API users
   * in APIHelper.
   */
  static API_TOKENS = {
    team: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWExNzhmNTMzOWZkMTAwMTUwZTcwODUiLCJpYXQiOjE3NzIxODk5NzcsImV4cCI6MTc3MzM5OTU3N30.5pgKN_I31e72ie-smI-jgZFC9L__MTnehue0dNmj3L0",
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OThjOTRkMTU0NmZiMDAwMTU5NmY0ODIiLCJpYXQiOjE3NzIwMTc0NjEsImV4cCI6MTc3MzIyNzA2MX0.JD29kFlFDQEj61IAhlyEEtHaba6uinMX5MlnPmSBok0",
    giorgia:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzIwMzE3NTYsImV4cCI6MTc3MzI0MTM1Nn0.2-3PHCO-GjVeMqwQxsbUyYXH2GghbZ_yCHv9OzrVwuc",
    giulia:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZTZkNTJjNGI4YjAwMTUxYWI3MDYiLCJpYXQiOjE3NzIwMjE0NjEsImV4cCI6MTc3MzIzMTA2MX0.-0KjluIwqH1o-neMo7j1NZ61bxMH_H6e0ODK3nH2pUQ",
    raffaele:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZmJiODJjNGI4YjAwMTUxYWI3MWQiLCJpYXQiOjE3NzIwMjY4MDgsImV4cCI6MTc3MzIzNjQwOH0.K3v__EInY4z7r_7buc8PnSNrY6mPhf4-2xNILIpdAoY",
    francesco:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZjdlNzJjNGI4YjAwMTUxYWI3MTkiLCJpYXQiOjE3NzIwMjU4MzEsImV4cCI6MTc3MzIzNTQzMX0.dAjkghsfXntRsNE9cITTxeKc6RcXf1Yv0rK6XjqcgWI",
  }

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

    this.apiUser = finalParams.apiUser
  }

  /**
   * Add comment.
   * 
   * {
        "comment": string
        "postId": string (the ID of the post)
    }
   */
  async addComment(newComment) {
    // new post is not an object
    if (!this.constructor.isObject(newComment)) {
      throw new Error(`New comment is required to be a valid JS object. It is of type "${typeof newComment}" instead.`)
    }
    // required "comment" property
    if (!newComment.comment) {
      throw new Error(`New comment is required to have "comment" property. "${JSON.stringify(newComment)}" given`)
    }
    // required "postId" property
    if (!newComment.postId) {
      throw new Error(
        `New comment is required to have "postId" property, ` +
          `which is the ID of the post to which this comment is connected. "${JSON.stringify(newComment)}" given`,
      )
    }

    const url = this.constructor.API_URL_COMMENTS

    const finalNewComment = {
      // the real API (server) wants elementId, but this API (CommentAPI)
      // only accepts postId, for intuitive usage
      elementId: newComment.postId,
      comment: newComment.comment,
      // field that the real API (server) requires
      rate: "5",
    }

    const moreConfig = {
      method: "POST",
      body: JSON.stringify(finalNewComment),
    }

    const config = this.getFetchConfig(moreConfig)
    const resp = await fetch(url, config)

    try {
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }

    const data = await resp.json()

    return this.constructor.prettifyComment(data)
  }

  /**
   * Get comments.
   * Default limit: 10
   */
  async getComments(limit = 10) {
    const url = this.constructor.API_URL_COMMENTS
    const config = this.getFetchConfig()
    const resp = await fetch(url, config)
    try {
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }
    const data = await resp.json()
    // if limit is a number and is greater than 0, limit the result
    if (Number.isFinite(limit) && limit > 0) {
      return this.constructor.prettifyComments(data.slice(0, limit))
    }
    return this.constructor.prettifyComments(data)
  }

  /**
   * Get most recent comments of a post, given a post ID.
   * Default limit: 10
   *
   * NOTE: the filter by post ID is done at frontend. The API
   * does not seem to expose a way to filter by postId directly in the API,
   * so it must be done at frontend.
   */
  async getMostRecentCommentsOfPost(postId, limit = 10) {
    if (!postId) {
      throw new Error(`Post id is required when getting comments. Input postId is "${postId}"`)
    }
    const url = this.constructor.API_URL_COMMENTS
    const config = this.getFetchConfig()
    const resp = await fetch(url, config)
    try {
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }
    const data = await resp.json()

    const commentsOfPost = this.constructor.filterCommentsOfPost(data, postId)

    // if limit is a number and is greater than 0, limit the result
    if (Number.isFinite(limit) && limit > 0) {
      const lastComments = commentsOfPost.slice(-limit)
      const mostRecentComments = lastComments.reverse()
      return this.constructor.prettifyComments(mostRecentComments)
    }
    return this.constructor.prettifyComments(commentsOfPost)
  }

  /**
   * Update comment by ID.
   *
   * newComment {
   *    comment: "<my new comment>"
   * }
   */
  async updateCommentById(commentId, newComment) {
    if (!commentId) {
      throw new Error(`Comment id is required when getting one comment. Input commentId is "${commentId}"`)
    }
    if (!this.constructor.isObject(newComment)) {
      throw new Error(`New comment data is required to be a valid JS object. It is of type "${typeof newComment}" instead.`)
    }
    // required "comment" property
    if (!newComment.comment) {
      throw new Error(`New comment is required to have "comment" property. "${JSON.stringify(newComment)}" given`)
    }
    const url = this.constructor.API_URL_COMMENTS + `/${commentId}`
    const moreConfig = {
      method: "PUT",
      body: JSON.stringify(newComment),
    }
    const config = this.getFetchConfig(moreConfig)

    const resp = await fetch(url, config)

    try {
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }

    const contentType = resp.headers.get("content-type")

    // response body is json
    if (contentType && contentType.includes("application/json")) {
      const data = await resp.json()

      if (data == null) {
        throw new Error(`Comment with ID "${commentId}" maybe was not found? ` + `Or maybe you are not its owner? Response status code: ${resp.status}`)
      }

      // success. return updated post
      return this.constructor.prettifyComment(data)
    }

    // response body is text
    const text = await resp.text()

    // if the response text is "ID non valido": ERROR
    if (text.trim().toLowerCase() == "id non valido") {
      throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
    }

    throw new Error(`This error was not caught. Response status code: ${resp.status}`)
  }

  /**
   * Delete comment by ID.
   */
  async deleteCommentById(commentId) {
    if (!commentId) {
      throw new Error(`Comment id is required when deleting post. Input commentId is "${commentId}"`)
    }
    const url = this.constructor.API_URL_COMMENTS + `/${commentId}`
    const moreConfig = {
      method: "DELETE",
    }
    const config = this.getFetchConfig(moreConfig)
    const resp = await fetch(url, config)
    try {
      // maybe a post with this ID does not exist?
      if (resp.status == 400) {
        throw new Error(`Error during fetch. A comment with this ID likely does not exist. Response status code: ${resp.status}`)
      }
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }

    const contentType = resp.headers.get("content-type")

    // response body is json
    if (contentType && contentType.includes("application/json")) {
      const data = await resp.json()

      if (data == null) {
        throw new Error(`Comment with ID "${commentId}" was not found. Response status code: ${resp.status}`)
      }

      // the API server seems to send back the object that is being deleted?
      // therefore I must assume that if data is not null, the object was
      // successfully deleted
      return `comment with ID "${commentId}" successfully deleted."`
    }

    // response body is text
    const text = await resp.text()

    // if the response text is "ID non valido": ERROR
    if (text.trim().toLowerCase() == "id non valido") {
      throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
    }

    throw new Error(`This error was not caught. Response status code: ${resp.status}`)
  }

  /**
   * Get the default + (optional) custom fetch config.
   */
  getFetchConfig(moreConfig = {}) {
    const apiToken = this.getApiToken()
    const defaultConfig = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiToken}`,
      },
    }
    const finalConfig = { ...structuredClone(defaultConfig), ...moreConfig }
    return finalConfig
  }

  getApiToken() {
    return this.constructor.API_TOKENS[this.apiUser]
  }

  /**
   * Get comments of a certain with the given post ID
   */
  static filterCommentsOfPost(comments, postId) {
    // if comments is not an array
    if (!Array.isArray(comments)) {
      throw new Error(`Comments must be an array. It is of type "${typeof comments}" instead.`)
    }
    return comments.filter((comment) => comment.elementId == postId)
  }

  /**
   * This method looks the same as the method in
   * APIHelper. However, because the comments endpoint
   * has its own API tokens, we must validate if the
   * CommentAPI instance has its OWN API user,
   * and not the "shared" API users that we find in
   * APIHelper.
   */
  static verifyIfExistsApiUser(apiUser) {
    const exists = this.API_TOKENS[apiUser] != undefined && this.API_TOKENS[apiUser] != null
    if (!exists) {
      throw new Error(`API user "${apiUser}" does not exist in the API users for class "CommentAPI".`)
    }
  }

  static prettifyComment(comment) {
    const createdAtObj = new Date(comment.createdAt)
    const createdAtForUI = createdAtObj.toLocaleString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const moreFields = {
      postId: comment.elementId,
      createdAtForUI,
      // add here more fields. they will appear in each post resource
    }

    return {
      ...comment,
      ...moreFields,
    }
  }

  static prettifyComments(comments) {
    const class_ = this
    return comments.map((comment) => {
      return class_.prettifyComment(comment)
    })
  }

  static isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]"
  }
}
