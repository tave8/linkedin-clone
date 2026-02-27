import { useEffect, useState } from "react"

import ExperienceAPI from "../../../assets/js/experience-api/ExperienceAPI"

const GetMyExperiences = () => {
  const [experiences, setExperiences] = useState([])
  const profileId = "69a178f5339fd100150e7085"

  useEffect(() => {
    const experienceAPI = new ExperienceAPI()
    experienceAPI
      .getExperiencesOfProfile(profileId)
      .then((experiences) => {
        console.log(experiences)
        setExperiences(experiences)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET MY EXPERIENCES</h1>
      {experiences.length > 0 && (
        <>
          {experiences.map((experience) => {
            return (
              <div key={experience._id}>
                <p>
                  {experience.role} - EXPERIENCE ID: {experience._id} ({experience.username})
                </p>
              </div>
            )
          })}
        </>
      )}
      {experiences.length == 0 && <p>Loading...</p>}
    </>
  )
}

export default GetMyExperiences
