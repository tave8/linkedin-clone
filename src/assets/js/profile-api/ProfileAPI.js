const defaultParams = {
  apiUser: "giuseppe",
}

export default class ProfileAPI {
  static API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile"
  static API_URL_MY_PROFILE = "https://striveschool-api.herokuapp.com/api/profile/me"
  static API_TOKENS = {
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljNGUyMDBiYzFkZTAwMTU3N2I3YjYiLCJpYXQiOjE3NzE4NTEzMjEsImV4cCI6MTc3MzA2MDkyMX0.YZ-u3PFGt5dmN5wQAI25NIOezRDpba2YuomGaZmjfDk",
  }

  /**
   * ## Usage
   *
   * ### usage 1
   * new LinkedinAPI()
   *
   * ### usage 2
   * new LinkedinAPI({
   *    apiUser: "giuseppe"
   * })
   *
   *
   */
  constructor(params = defaultParams) {
    const finalParams = { ...structuredClone(defaultParams), ...params }
    this.apiUser = finalParams.apiUser
  }

  /**
   * Get profiles.
   */
  async getProfiles() {
    const url = this.constructor.API_URL_PROFILES
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
   * Get my profile.
   */
  async getMyProfile() {
    const url = this.constructor.API_URL_MY_PROFILE
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
   * Get 1 remote profile.
   */
  async getProfileById(profileId) {
    if (!profileId) {
      throw new Error(`User id is required when getting one remote profile. Input profileId is "${profileId}"`)
    }
    const url = this.constructor.API_URL_PROFILES + `/${profileId}`
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
   * Update my profile.
   */
  async updateMyProfile(newProfile) {
    if (!this.constructor.isObject(newProfile)) {
      throw new Error(`New profile data is required to be a valid JS object. It is of type "${typeof newProfile}" instead.`)
    }
    const url = this.constructor.API_URL_PROFILES
    const moreConfig = {
      method: "PUT",
      body: JSON.stringify(newProfile),
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

  static isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]"
  }
}
