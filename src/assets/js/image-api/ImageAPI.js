import APIHelper from "../APIHelper"
import PostAPI from "../post-api/PostAPI"

const defaultParams = {
  apiUser: "giuseppe",
}

export default class ImageAPI extends APIHelper {
  static API_URL_IMAGES_OF_POSTS = "https://striveschool-api.herokuapp.com/api/posts"
  static API_URL_IMAGES_OF_PROFILES = "https://striveschool-api.herokuapp.com/api/profile"

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

    this.apiUser = finalParams.apiUser
  }

  /**
   * Add an image to a profile.
   */
  async addImageToProfile(imageFile, profileId) {
    // image file is not a real file image
    if (!this.constructor.isImageFile(imageFile)) {
      console.error(imageFile)
      throw new Error(`Image must be a real file image. Its type is "${typeof imageFile}" instead. ` + `Are you sure you are adding an actual image file?`)
    }
    // profileId does not exist
    if (!profileId) {
      throw new Error(`When adding an image, the profile ID must be specified. Profile ID "${profileId}" given`)
    }

    const url = this.constructor.API_URL_IMAGES_OF_PROFILES + `/${profileId}/picture`

    const formData = new FormData()
    // as specified by the API server
    formData.append("profile", imageFile)

    const moreConfig = {
      method: "POST",
      body: formData,
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

    // // const data = await resp.json()

    return resp

    // return this.constructor.prettifyPost(data)
  }

  /**
   * Add an image to a post.
   */
  async addImageToPost(imageFile, postId) {
    // throw new Error("This method is temporarily disabled.")

    // image file is not a real file image
    if (!this.constructor.isImageFile(imageFile)) {
      console.error(imageFile)
      throw new Error(`Image must be a real file image. Its type is "${typeof imageFile}" instead. ` + `Are you sure you are adding an actual image file?`)
    }
    // postId does not exist
    if (!postId) {
      throw new Error(`When adding an image, the post ID must be specified. Post ID "${postId}" given`)
    }

    const url = this.constructor.API_URL_IMAGES_OF_POSTS + `/${postId}`

    const formData = new FormData()
    // as specified by the API server
    formData.append("post", imageFile)

    const moreConfig = {
      method: "POST",
      body: formData,
    }

    const config = this.getFetchConfig(moreConfig)

    const resp = await fetch(url, config)

    try {
      if (resp.status == 401) {
        throw new Error(`Unauthorized. Are you sure this is your post? Response status code: ${resp.status}`)
      }
      if (!resp.ok) {
        throw new Error(`Error during fetch. Response status code: ${resp.status}`)
      }
    } catch (err) {
      console.error(resp)
      throw err
    }

    // the API server will return a JSON, if success
    const data = await resp.json()

    // the new post is at _doc in the JSON returned from the server
    if (!Object.hasOwn(data, "_doc")) {
      throw new Error(`Expected "_doc" property on the JSON after successful image upload, but such property was not found.`)
    }

    const postFromServer = data._doc

    return PostAPI.prettifyPost(postFromServer)
  }

  /**
   * Get the default + (optional) custom fetch config.
   */
  getFetchConfig(moreConfig = {}) {
    const apiToken = this.getApiToken()
    const defaultConfig = {
      headers: {
        // no content-type header seems needed
        // check assumptions about using FormData etc.
        authorization: `Bearer ${apiToken}`,
      },
    }
    const finalConfig = { ...structuredClone(defaultConfig), ...moreConfig }
    return finalConfig
  }

  getApiToken() {
    return this.constructor.API_TOKENS[this.apiUser]
  }

  static isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]"
  }
}
