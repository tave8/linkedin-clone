import { useEffect, useState } from "react"
import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"

/**
 * PROFILE model
  {
    "name": "Mario",
    "surname": "Rossi",
    "email": "mario@rossi.it",
    "username": "mario88",
    "bio": "Freelance developer",
    "title": "Full Stack Web Developer",
    "area": "Milan",
    "image": ..., // SERVER GENERATED, modificabile
    "createdAt": "2019-09-20T08:53:07.094Z", // SERVER GENERATED
    "updatedAt": "2019-09-20T09:00:46.977Z", // SERVER GENERATED
    "__v": 0, // SERVER GENERATED
    "_id": "5d84937322b7b54d848eb41b", // SERVER GENERATED
  }
 */
const UpdateMyProfile = () => {
  const [profile, setProfile] = useState(null)

  const newProfile = {
    // image: "https://i.postimg.cc/8kn0m39H/photo-giuseppe-white-bg-trim.png",
    // title: "Pokemon Developer",
    //     area: "Karlsruhe, Germany",
    bio: `Dedicated to continuous self-learning, I’m a software developer who built a complete CRM software for the administration and executive departments, including the president, of one of Italy’s leading outsourcing companies. My work has directly impacted business decisions through complex SQL-based reporting and analytics.

    Highlights:
    ✅ Sole developer responsible for software serving 120+ employees — from interface to database.
    ✅ SQL. Designed and implemented advanced SQL algorithms for executive reports and data-driven decisions.
    ✅ System thinking. Built appointments, invoicing, contracts, salaries, sales, employee management, debt collection and performance tracking systems.
    ✅ Languages. Strong communication skills in Italian, English and German.
    ✅ Communication. Over the years I've been appreciated for my teaching skills. For example, I taught a Python course. I love to present technical concepts in simple ways. You can see my social media (youtube channel).

    What motivates me? Working for the common good and solving the pressing problems of humanity: sustainable energy, agriculture, circular economy, etc. Insatiable curiosity and determination are further represented by speaking six foreign languages, which gives me an edge in both digital and human-centered environments.

    Programming languages:
    - HTML
    - CSS
    - JavaScript
    - Python
    - PHP
    - SQL

    Libraries/Frameworks:
    - Bootstrap (html)
    - jQuery
    - Flask (python)

    Paradigms:
    - async
    - OOP`,
    // username: "tave8",
    // name: "Francesco",
    // surname: "Dattola",
    // email: "giuseppetavella8@gmail.com",
  }

  useEffect(() => {
    const profileAPI = new ProfileAPI({
      apiUser: "giuseppe",
    })
    profileAPI
      .updateMyProfile(newProfile)
      .then((post) => {
        setProfile(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>UPDATE MY PROFILE</h1>
      {profile && (
        <div>
          <p>{profile.username}</p>
          <p>{profile._id}</p>
        </div>
      )}
      {!profile && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
