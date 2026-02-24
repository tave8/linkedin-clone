const defaultParams = {
  apiUser: "giuseppe",
}

export default class PostAPI {
  static API_URL_POSTS = "https://striveschool-api.herokuapp.com/api/posts"

  static API_TOKENS = {
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljNGUyMDBiYzFkZTAwMTU3N2I3YjYiLCJpYXQiOjE3NzE4NTEzMjEsImV4cCI6MTc3MzA2MDkyMX0.YZ-u3PFGt5dmN5wQAI25NIOezRDpba2YuomGaZmjfDk",
  }

  /**
   */
  constructor(params = defaultParams) {
    const finalParams = { ...structuredClone(defaultParams), ...params }
    this.apiUser = finalParams.apiUser
  }

  /**
   * Get posts.
   * Default limit: 10
   */
  async getPosts(limit = 10) {
    const url = this.constructor.API_URL_POSTS
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
      return this.constructor.prettifyPosts(data.slice(0, limit))
    }
    return this.constructor.prettifyPosts(data)
  }

  /**
   * Get most recent posts.
   * Default limit: 10
   */
  async getMostRecentPosts(limit = 10) {
    const url = this.constructor.API_URL_POSTS
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
      // get the last limit result
      const lastNItems = data.slice(-limit)
      // reverse the N items
      return this.constructor.prettifyPosts(lastNItems.reverse())
    }
    return this.constructor.prettifyPosts(data)
  }

  /**
   * Get post by ID.
   */
  async getPostById(postId) {
    if (!postId) {
      throw new Error(`Post id is required when getting one remote profile. Input postId is "${postId}"`)
    }
    const url = this.constructor.API_URL_POSTS + `/${postId}`
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
    return data
  }

  /**
   * Add post.
   */
  async addPost(newPost) {
    // new post is not an object
    if (!this.constructor.isObject(newPost)) {
      throw new Error(`New post is required to be a valid JS object. It is of type "${typeof newPost}" instead.`)
    }
    // required "text" property
    if (!newPost.text) {
      throw new Error(`New post is required to have at least the "text" property. "${JSON.stringify(newPost)}" given`)
    }

    const url = this.constructor.API_URL_POSTS
    const moreConfig = {
      method: "POST",
      body: JSON.stringify(newPost),
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
    return data
  }

  /**
   * Update post by ID.
   */
  async updatePostById(postId, newPost) {
    if (!postId) {
      throw new Error(`Post id is required when getting one remote profile. Input postId is "${postId}"`)
    }
    if (!this.constructor.isObject(newPost)) {
      throw new Error(`New profile data is required to be a valid JS object. It is of type "${typeof newPost}" instead.`)
    }
    const url = this.constructor.API_URL_POSTS
    const moreConfig = {
      method: "PUT",
      body: JSON.stringify(newPost),
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
    return data
  }

  /**
   * Delete post by ID.
   */
  async deletePostById(postId) {
    if (!postId) {
      throw new Error(`Post id is required when deleting post. Input postId is "${postId}"`)
    }
    const url = this.constructor.API_URL_POSTS + `/${postId}`
    const moreConfig = {
      method: "DELETE",
    }
    const config = this.getFetchConfig(moreConfig)
    const resp = await fetch(url, config)
    try {
      // maybe a post with this ID does not exist?
      if (resp.status == 400) {
        throw new Error(`Error during fetch. A post with this ID likely does not exist. Response status code: ${resp.status}`)
      }
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }

    const text = await resp.text()

    // if the response text is "ID non valido": ERROR
    if (text.trim().toLowerCase() == "id non valido") {
      throw new Error(`The API server said that this ID is not valid. Response status code: ${resp.status}`)
    }

    // if the response text is "Removed": SUCCESS
    if (text.trim().toLowerCase() == "removed") {
      return text
    }

    // if the response text does not follow any previous case
    throw new Error(`This API response case was not caught. Response status code: ${resp.status}; response text: ${text}`)
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

  static prettifyPosts(posts) {
    return posts.map((post) => {
      const createdAtObj = new Date(post.createdAt)
      const createdAtForUI = createdAtObj.toLocaleString("it-IT")
      const moreFields = {
        createdAtForUI,
      }
      return {
        ...post,
        ...moreFields,
      }
    })
  }

  static isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]"
  }
}
