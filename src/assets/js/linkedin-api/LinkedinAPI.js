const defaultParams = {
  apiUser: "giuseppe",
}

export default class LinkedinAPI {
  static API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile"
  static API_URL_MY_PROFILE = "https://striveschool-api.herokuapp.com/api/profile/me"
  static API_TOKENS = {
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OThjOTRkMTU0NmZiMDAwMTU5NmY0ODIiLCJpYXQiOjE3NzE4NDQ3NjIsImV4cCI6MTc3MzA1NDM2Mn0.f3D4mDY8ttaATQjqQ68K2gJbgpzFibbklkKnZZgQ9Ok",
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
   * Get remote profiles.
   */
  async getProfilesRemote() {
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
   * Get my remote profile.
   */
  async getMyProfileRemote() {
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
  async getOneProfileRemote(profileId) {
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
   * Update my remote profile.
   */
  async updateMyProfileRemote() {
    const url = this.constructor.API_URL_PROFILES
    const moreConfig = {
      method: "PUT",
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
}
