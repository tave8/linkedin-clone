/**
 * API Helper class
 * Only static methods.
 */
export default class APIHelper {
  static API_TOKENS = {
    giuseppe:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljNGUyMDBiYzFkZTAwMTU3N2I3YjYiLCJpYXQiOjE3NzE4NTEzMjEsImV4cCI6MTc3MzA2MDkyMX0.YZ-u3PFGt5dmN5wQAI25NIOezRDpba2YuomGaZmjfDk",
    giorgia:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTlkYzhjYWI1NTgyMDAwMTU4YzM0NDkiLCJpYXQiOjE3NzE5NTAxNDgsImV4cCI6MTc3MzE1OTc0OH0.2-bzpOCmAM0tWJhh1g0xo5p9IJiiyBsVppyQLZNnZlQ",
    raffaele:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTlkZDA3OWI1NTgyMDAwMTU4YzM0NWIiLCJpYXQiOjE3NzE5NTAyMDEsImV4cCI6MTc3MzE1OTgwMX0.6N69jUGpcpXnvr_GZjSy0M4K8eFP-kzHLI-J6RGgzE4",
    giulia:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZTY4MTJjNGI4YjAwMTUxYWI3MDQiLCJpYXQiOjE3NzIwMjEzNzcsImV4cCI6MTc3MzIzMDk3N30.YgtjZoD54znFx3J_bjX5GwCCnnntz2NRZhGd0C-SoR8",
    francesco:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTllZjc3NTJjNGI4YjAwMTUxYWI3MTUiLCJpYXQiOjE3NzIwMjU3MTcsImV4cCI6MTc3MzIzNTMxN30.BUmyxKvmm-b9e-ZaaxnegMHl2uzuOpY3K0vrG7z_QN4",
  }

  static verifyIfExistsApiUser(apiUser) {
    const exists = this.API_TOKENS[apiUser] != undefined && this.API_TOKENS[apiUser] != null
    if (!exists) {
      throw new Error(`API user "${apiUser}" does not exist in "shared" API users.`)
    }
  }

  /**
   * Returns a random API user.
   */
  static getRandomApiUser() {
    const apiTokens = this.API_TOKENS
    const users = Object.keys(apiTokens)
    const randomUser = users[Math.floor(Math.random() * users.length)]
    return randomUser
  }

  /**
   * Get API Users.
   * returns [
   *    {
   *      name: string
   *    },
   *    ...
   * ]
   */
  static async getAPIUsers() {
    const apiTokens = this.API_TOKENS
    const users = Object.keys(apiTokens)
    return users.map((user) => {
      return {
        name: user,
      }
    })
  }
}
