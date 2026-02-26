import APIHelper from "../APIHelper"

const defaultParams = {
  apiUser: "giuseppe",
}

export default class ImageAPI extends APIHelper {
  static API_URL_IMAGES_OF_POSTS = "https://striveschool-api.herokuapp.com/api/posts"

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

    this.apiUser = finalParams.apiUser
  }

  /**
   * Add an image to a post.
   */
  async addImageToPost(imageFile, postId) {
    throw new Error("This method is temporarily disabled.")

    // image file is not a real file image
    // if (!this.constructor.isImageFile(imageFile)) {
    //   console.error(imageFile)
    //   throw new Error(`Image must be a real file image. Its type is "${typeof imageFile}" instead. ` + `Are you sure you are adding an actual image file?`)
    // }
    // // postId does not exist
    // if (!postId) {
    //   throw new Error(`When adding an image, the post ID must be specified. Post ID "${postId}" given`)
    // }

    // const url = this.constructor.API_URL_IMAGES_OF_POSTS

    // const formData = new FormData()
    // // as specified by the API server
    // formData.append("post", imageFile)

    // const moreConfig = {
    //   method: "POST",
    //   body: formData,
    // }

    // const config = this.getFetchConfig(moreConfig)

    // const resp = await fetch(url, config)

    // try {
    //   if (!resp.ok) {
    //     throw new Error(`Error during fetch. Response status code: ${resp.status}`)
    //   }
    // } catch (err) {
    //   console.error(resp)
    //   throw err
    // }

    // // const data = await resp.json()

    // return resp

    // return this.constructor.prettifyPost(data)
  }

  /**
   * Get the default + (optional) custom fetch config.
   */
  getFetchConfig(moreConfig = {}) {
    const apiToken = this.getApiToken()
    const defaultConfig = {
      headers: {
        // FIX content-type
        // "content-type": "application/json",
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
