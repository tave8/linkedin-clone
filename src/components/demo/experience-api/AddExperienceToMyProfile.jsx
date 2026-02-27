import { useEffect, useState } from "react"

import ExperienceAPI from "../../../assets/js/experience-api/ExperienceAPI"

const AddExperienceToMyProfile = () => {
  const [experience, setExperience] = useState(null)

  const experienceFields = {
    role: "Full Stack Web Developer (PROFILE: TEAM 3)",
    company: "FizzBuzz",
    startDate: "2022-06-16",
    endDate: "2023-06-16", // può essere null
    description: "Implementing new features",
    area: "Milan",
  }

  useEffect(() => {
    const experienceAPI = new ExperienceAPI({ apiUser: "team" })
    experienceAPI
      .addExperienceToMyProfile(experienceFields)
      .then((updatedExperience) => {
        console.log(updatedExperience)
        setExperience(updatedExperience)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>ADD EXPERIENCE TO MY PROFILE</h1>
      {experience && (
        <div>
          <p>
            "{experience.role}" di {experience.area} - ID: {experience._id}
          </p>
          <p></p>
        </div>
      )}
      {!experience && <p>Loading...</p>}
    </>
  )
}

export default AddExperienceToMyProfile
