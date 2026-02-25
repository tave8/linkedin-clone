import APIHelper from "../APIHelper"

const defaultParams = {
  apiUser: "giuseppe",
}

export default class CommentAPI extends APIHelper {
  static API_URL_COMMENTS = "https://striveschool-api.herokuapp.com/api/comments"

  /**
   * These are API users for the comments endpoint,
   * and they are different from the the "shared" API users
   * in APIHelper.
   */
  static API_TOKENS = {
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OThjOTRkMTU0NmZiMDAwMTU5NmY0ODIiLCJpYXQiOjE3NzIwMTc0NjEsImV4cCI6MTc3MzIyNzA2MX0.JD29kFlFDQEj61IAhlyEEtHaba6uinMX5MlnPmSBok0",
    giulia:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZTZkNTJjNGI4YjAwMTUxYWI3MDYiLCJpYXQiOjE3NzIwMjE0NjEsImV4cCI6MTc3MzIzMTA2MX0.-0KjluIwqH1o-neMo7j1NZ61bxMH_H6e0ODK3nH2pUQ",
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
   * Get most recent posts.
   * Default limit: 10
   */
  //   async getMostRecentPosts(limit = 10) {
  //     const url = this.constructor.API_URL_POSTS
  //     const config = this.getFetchConfig()
  //     const resp = await fetch(url, config)
  //     try {
  //       if (!resp.ok) {
  //         throw new Error(`Error during fetch. Response status code: ${resp.status}`)
  //       }
  //     } catch (err) {
  //       console.error(resp)
  //       throw err
  //     }
  //     const data = await resp.json()
  //     // if limit is a number and is greater than 0, limit the result
  //     if (Number.isFinite(limit) && limit > 0) {
  //       // get the last limit result
  //       const lastNItems = data.slice(-limit)
  //       // reverse the N items
  //       return this.constructor.prettifyPosts(lastNItems.reverse())
  //     }
  //     return this.constructor.prettifyPosts(data)
  //   }

  /**
   * Get post by ID.
   */
  //   async getPostById(postId) {
  //     if (!postId) {
  //       throw new Error(`Post id is required when getting one remote profile. Input postId is "${postId}"`)
  //     }
  //     const url = this.constructor.API_URL_POSTS + `/${postId}`
  //     const config = this.getFetchConfig()
  //     const resp = await fetch(url, config)
  //     try {
  //       if (!resp.ok) {
  //         throw new Error(`Error during fetch. Response status code: ${resp.status}`)
  //       }
  //     } catch (err) {
  //       console.error(resp)
  //       throw err
  //     }

  //     const contentType = resp.headers.get("content-type")

  //     // response body is json
  //     if (contentType && contentType.includes("application/json")) {
  //       const data = await resp.json()

  //       if (data == null) {
  //         throw new Error(`Post with ID "${postId}" was not found. Response status code: ${resp.status}`)
  //       }

  //       return this.constructor.prettifyPost(data)
  //     }

  //     // response body is text
  //     const text = await resp.text()

  //     // if the response text is "ID non valido": ERROR
  //     if (text.trim().toLowerCase() == "id non valido") {
  //       throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
  //     }

  //     throw new Error(`This error was not caught. Response status code: ${resp.status}`)
  //   }

  /**
   * Add post.
   */
//   async addPost(newPost) {
//     // new post is not an object
//     if (!this.constructor.isObject(newPost)) {
//       throw new Error(`New post is required to be a valid JS object. It is of type "${typeof newPost}" instead.`)
//     }
//     // required "text" property
//     if (!newPost.text) {
//       throw new Error(`New post is required to have at least the "text" property. "${JSON.stringify(newPost)}" given`)
//     }

//     const url = this.constructor.API_URL_POSTS

//     const moreConfig = {
//       method: "POST",
//       body: JSON.stringify(newPost),
//     }

//     const config = this.getFetchConfig(moreConfig)
//     const resp = await fetch(url, config)

//     try {
//       if (!resp.ok) {
//         throw new Error(`Error during fetch. Response status code: ${resp.status}`)
//       }
//     } catch (err) {
//       console.error(resp)
//       throw err
//     }

//     const data = await resp.json()

//     return this.constructor.prettifyPost(data)
//   }

  /**
   * Update post by ID.
   *
   * NOTE: Request can take indefinitely because of (supposed)
   * server not responding.
   * Example:
   *  ID: 699d9dc1b5582000158c3433 --> server doesn't respond
   *  an existing ID: server responds
   */
  //   async updatePostById(postId, newPost) {
  //     if (!postId) {
  //       throw new Error(`Post id is required when getting one remote profile. Input postId is "${postId}"`)
  //     }
  //     if (!this.constructor.isObject(newPost)) {
  //       throw new Error(`New profile data is required to be a valid JS object. It is of type "${typeof newPost}" instead.`)
  //     }
  //     const url = this.constructor.API_URL_POSTS + `/${postId}`
  //     const moreConfig = {
  //       method: "PUT",
  //       body: JSON.stringify(newPost),
  //     }
  //     const config = this.getFetchConfig(moreConfig)

  //     const resp = await fetch(url, config)

  //     try {
  //       if (!resp.ok) {
  //         throw new Error(`Error during fetch. Response status code: ${resp.status}`)
  //       }
  //     } catch (err) {
  //       console.error(resp)
  //       throw err
  //     }

  //     const contentType = resp.headers.get("content-type")

  //     // response body is json
  //     if (contentType && contentType.includes("application/json")) {
  //       const data = await resp.json()

  //       // if (data == null) {
  //       //   throw new Error(`Post with ID "${postId}" was not found. Response status code: ${resp.status}`)
  //       // }

  //       // success. return updated post
  //       return this.constructor.prettifyPost(data)
  //     }

  //     // response body is text
  //     const text = await resp.text()

  //     // if the response text is "ID non valido": ERROR
  //     if (text.trim().toLowerCase() == "id non valido") {
  //       throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
  //     }

  //     throw new Error(`This error was not caught. Response status code: ${resp.status}`)
  //   }

  /**
   * Delete post by ID.
   */
  //   async deletePostById(postId) {
  //     if (!postId) {
  //       throw new Error(`Post id is required when deleting post. Input postId is "${postId}"`)
  //     }
  //     const url = this.constructor.API_URL_POSTS + `/${postId}`
  //     const moreConfig = {
  //       method: "DELETE",
  //     }
  //     const config = this.getFetchConfig(moreConfig)
  //     const resp = await fetch(url, config)
  //     try {
  //       // maybe a post with this ID does not exist?
  //       if (resp.status == 400) {
  //         throw new Error(`Error during fetch. A post with this ID likely does not exist. Response status code: ${resp.status}`)
  //       }
  //       if (!resp.ok) {
  //         throw new Error(`Error during fetch. Response status code: ${resp.status}`)
  //       }
  //     } catch (err) {
  //       console.error(resp)
  //       throw err
  //     }

  //     const text = await resp.text()

  //     // if the response text is "ID non valido": ERROR
  //     if (text.trim().toLowerCase() == "id non valido") {
  //       throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
  //     }

  //     // if the response text is "Removed": SUCCESS
  //     if (text.trim().toLowerCase() == "removed") {
  //       return text
  //     }

  //     // if the response text does not follow any previous case
  //     throw new Error(`This API response case was not caught. Response status code: ${resp.status}; response text: ${text}`)
  //   }

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
    const moreFields = {
      // add here more fields. they will appear in each comment
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
