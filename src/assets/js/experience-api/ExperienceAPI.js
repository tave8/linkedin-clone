import APIHelper from "../APIHelper"

const defaultParams = {
  apiUser: "team",
}

export default class ExperienceAPI extends APIHelper {
  static API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile"

  /**
   */
  constructor(params = defaultParams) {
    super()
    const finalParams = { ...structuredClone(defaultParams), ...params }

    this.constructor.verifyIfExistsApiUser(finalParams.apiUser)

    this.apiUser = finalParams.apiUser
  }

  /**
   * Get experiences of profile.
   */
  async getExperiencesOfProfile(profileId) {
    const url = this.constructor.API_URL_PROFILES + `/${profileId}/experiences`
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
    const experiences = await resp.json()
    return this.constructor.prettifyExperiences(experiences)
  }

  /**
   * Add experience to my profile
   */
  async addExperienceToMyProfile(newExperience) {
    // new experience is not an object
    if (!this.constructor.isObject(newExperience)) {
      throw new Error(`New experience is required to be a valid JS object. It is of type "${typeof newExperience}" instead.`)
    }
    // required "role" property
    if (!newExperience.role) {
      throw new Error(`New experience is required to have "role" property. "${JSON.stringify(newExperience)}" given`)
    }
    // required "company" property
    if (!newExperience.company) {
      throw new Error(`New experience is required to have "company" property. "${JSON.stringify(newExperience)}" given`)
    }
    // required "startDate" property
    if (!newExperience.startDate) {
      if (!this.constructor.isValidYearMonthDayString(newExperience.startDate)) {
        throw new Error(`New experience startDate is required to be a valid year-month-day string. "${JSON.stringify(newExperience)}" given`)
      }
      throw new Error(`New experience is required to have "startDate" property. "${JSON.stringify(newExperience)}" given`)
    }
    // if endDate is not nully, then it must be a valid year-month-day string
    if (typeof newExperience.endDate == "string") {
      if (!this.constructor.isValidYearMonthDayString(newExperience.endDate)) {
        throw new Error(`New experience endDate, if provided, must be a valid year-month-day string. "${JSON.stringify(newExperience)}" given`)
      }
    }
    // required "description" property
    if (!newExperience.description) {
      throw new Error(`New experience is required to have "description" property. "${JSON.stringify(newExperience)}" given`)
    }
    // required "area" property
    if (!newExperience.area) {
      throw new Error(`New experience is required to have "area" property. "${JSON.stringify(newExperience)}" given`)
    }

    // I don't need the :userId?
    const url = this.constructor.API_URL_PROFILES + `/xxx/experiences`

    const moreConfig = {
      method: "POST",
      body: JSON.stringify(newExperience),
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

    return this.constructor.prettifyExperience(data)
  }

  static prettifyExperience(experience) {
    const startDateObj = new Date(experience.startDate)
    const startDateForUI = startDateObj.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })

    let endDateForUI
    // if endDate exists, format it
    if (experience.endDate) {
      const endDateObj = new Date(experience.endDate)
      endDateForUI = endDateObj.toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    }

    let moreFields = {
      startDateForUI,
      // add here more fields. they will appear in each experience resource
    }

    // if endDate exists, add its additional format to more fields
    if (experience.endDate) {
      moreFields = { ...moreFields, endDateForUI }
    }

    return {
      ...experience,
      ...moreFields,
    }
  }

  static prettifyExperiences(experiences) {
    const class_ = this
    return experiences.map((experience) => {
      return class_.prettifyExperience(experience)
    })
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
