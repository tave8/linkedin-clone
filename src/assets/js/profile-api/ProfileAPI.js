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
   * Get my profiles.
   * Note that apiUser = profile; have not agreed on terminology.
   *
   * @param exceptProfile: string: ["giuseppe", "giulia", "giorgia", "francesco", "raffaele"]
   *
   * @returns [
   *    {
   *      apiUser: string
   *      name: string  // legacy
   *      firstName: string
   *      lastName: string
   *      imageUrl: string
   *    },
   *    ...
   * ]
   */
  async getMyProfiles({ exceptProfile = null } = {}) {
    const apiTokens = this.constructor.API_TOKENS
    // the filtered or all API users
    const apiUsers = Object.keys(apiTokens)
    // if exceptProfile has been provided, check that
    // this profile/API user truly exists
    if (exceptProfile != null) {
      this.constructor.verifyIfExistsApiUser(exceptProfile)
    }
    // if exceptProfile has been provided, filter
    const filteredApiUsers = exceptProfile != null ? apiUsers.filter((u) => u != exceptProfile) : apiUsers

    const myProfilePromises = filteredApiUsers.map((apiUser) => {
      const profileAPI = new ProfileAPI({
        apiUser,
      })
      const promise = profileAPI.getMyProfile()
      return promise
    })
    try {
      const myProfiles = await Promise.all(myProfilePromises)
      return myProfiles.map((myProfile, i) => {
        const apiUser = filteredApiUsers[i]
        return {
          ...myProfile,
          _apiUser: apiUser,
        }
      })
    } catch (err) {
      console.error(err)
      throw new Error(`Error while fetching "myProfiles". Details: ${err}`)
    }
  }

  static prettifyProfile(profile) {
    return profile
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
