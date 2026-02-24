import Helper from "../Helper"
import OpenAI from "../open-ai/OpenAI"

const defaultParams = {
  apiUser: "giuseppe",
}

export default class PostAPI extends Helper {
  static API_URL_POSTS = "https://striveschool-api.herokuapp.com/api/posts"

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

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

    const contentType = resp.headers.get("content-type")

    // response body is json
    if (contentType && contentType.includes("application/json")) {
      const data = await resp.json()

      if (data == null) {
        throw new Error(`Post with ID "${postId}" was not found. Response status code: ${resp.status}`)
      }

      return this.constructor.prettifyPost(data)
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

    return this.constructor.prettifyPost(data)
  }

  /**
   * Update post by ID.
   *
   * NOTE: Request can take indefinitely because of (supposed)
   * server not responding.
   * Example:
   *  ID: 699d9dc1b5582000158c3433 --> server doesn't respond
   *  an existing ID: server responds
   */
  async updatePostById(postId, newPost) {
    if (!postId) {
      throw new Error(`Post id is required when getting one remote profile. Input postId is "${postId}"`)
    }
    if (!this.constructor.isObject(newPost)) {
      throw new Error(`New profile data is required to be a valid JS object. It is of type "${typeof newPost}" instead.`)
    }
    const url = this.constructor.API_URL_POSTS + `/${postId}`
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

    const contentType = resp.headers.get("content-type")

    // response body is json
    if (contentType && contentType.includes("application/json")) {
      const data = await resp.json()

      // if (data == null) {
      //   throw new Error(`Post with ID "${postId}" was not found. Response status code: ${resp.status}`)
      // }

      // success. return updated post
      return this.constructor.prettifyPost(data)
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
   * Generate and add AI-generated posts with random profiles
   * (profile = API token owner)
   */
  async generateAndAddAIPostsWithRandomProfiles(_postThemes, howMany = 1) {
    if (!_postThemes) {
      throw new Error("Post themes cannot be empty or nully.")
    }
    let postThemes
    // if  _postThemes is already an array, keep it
    if (Array.isArray(_postThemes)) {
      postThemes = _postThemes
    }
    // otherwise I assume it's a string, so add it to an array of 1 element
    else if (typeof _postThemes == "string") {
      postThemes = [_postThemes]
    }
    // unknown datatype: neither array nor string
    else {
      throw new Error(`Post themes has value "${_postThemes}". ` + `It must be either an array or a string, it's of type "${typeof _postThemes}" instead.`)
    }

    const openAIPromises = []
    const openAI = new OpenAI({ simplify: true })

    for (let i = 0; i < howMany; i++) {
      // choose a random theme from the themes array
      const postTheme = postThemes[Math.floor(Math.random() * postThemes.length)] 
      const prompt =
        `Create a post about "${postTheme}". ` +
        `Be professional and very creative. ` +
        `Post length must vary a lot between 20 and 100 words. Give me the post directly. `
      const promise = openAI.ask(prompt)
      openAIPromises.push(promise)
    }

    /**
     * openAIAnswer: {
     *    message: string
     * }
     */
    const openAIPosts = (await Promise.all(openAIPromises)).map((openAIAnswer) => openAIAnswer.message)

    const postsPromises = openAIPosts.map((postText) => {
      const postAPI = new PostAPI({
        apiUser: this.constructor.getRandomApiUser(),
      })
      return postAPI.addPost({
        text: postText,
      })
    })

    const posts = await Promise.all(postsPromises)

    return posts
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

  static prettifyPost(post) {
    const createdAtObj = new Date(post.createdAt)
    const createdAtForUI = createdAtObj.toLocaleString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const moreFields = {
      createdAtForUI,
      // add here more fields. they will appear in each post resource
    }

    return {
      ...post,
      ...moreFields,
    }
  }

  static prettifyPosts(posts) {
    const class_ = this
    return posts.map((post) => {
      return class_.prettifyPost(post)
    })
  }

  static isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]"
  }
}
