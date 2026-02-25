import APIHelper from "../APIHelper"

const defaultParams = {
  apiUser: "giuseppe",
}

export default class ProfileAPI extends APIHelper {
  static API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile"
  static API_URL_MY_PROFILE = "https://striveschool-api.herokuapp.com/api/profile/me"

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

    this.apiUser = finalParams.apiUser
  }

  /**
   * Get profiles.
   * Default limit: 10
   */
  async getProfiles(limit = 10) {
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
    // if limit is a number and is greater than 0, limit the result
    if (Number.isFinite(limit) && limit > 0) {
      return data.slice(0, limit)
    }
    return data
  }

  /**
   * Get most recent profiles.
   * Default limit: 10
   */
  async getMostRecentProfiles(limit = 10) {
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
    // if limit is a number and is greater than 0, limit the result
    if (Number.isFinite(limit) && limit > 0) {
      // get the last limit result
      const lastNItems = data.slice(-limit)
      // reverse the N items
      return lastNItems.reverse()
    }
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
    // new profile is not an object
    if (!this.constructor.isObject(newProfile)) {
      throw new Error(`New profile data is required to be a valid JS object. It is of type "${typeof newProfile}" instead.`)
    }
    // the bio field, if it exists, must be a non-empty string
    if (Object.hasOwn(newProfile, "bio")) {
      // if bio is not a string
      if (typeof newProfile.bio != "string") {
        throw new Error(`The bio of a profile must be a string. It is of type "${typeof newProfile.bio}" instead.`)
      }
      // bio is a string
      if (newProfile.bio.trim() == "") {
        throw new Error(`The bio of a profile cannot be empty.`)
      }
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
   * DEPRECATED
   */
  async getAPIUsers(params) {
    return this.getMyProfiles(params)
  }

  async getMyProfiles(params) {
    return this.constructor.getMyProfiles(params)
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
