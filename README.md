# API Classes

## ProfileAPI

### Get profile by ID

Promise

```js
const profileAPI = new ProfileAPI()
const profileId = "699c4e200bc1de001577b7b6"

profileAPI
    .getProfileById(profileId)
    .then(profile => {
        // your code
    })
    .catch(err => {
        console.error(err)
    })
```

### Get my profile

Promise

```js
const profileAPI = new ProfileAPI()

profileAPI
    .getMyProfile()
    .then(profile => {
        // your code
    })
    .catch(err => {
        console.error(err)
    })
```

### Update my profile

```js
const profileAPI = new ProfileAPI()
const newProfileFields = {
    username: "<my new username>",
    bio: "<my new bio>",
    // more fields if needed
}

profileAPI
    .updateMyProfile(newProfileFields)
    .then(profile => {
        // your code
    })
    .catch(err => {
        console.error(err)
    })
```

### Get profiles

Default limit: 10

```js
const profileAPI = new ProfileAPI()

profileAPI
    .getProfiles()
    .then(profiles => {
        // your code
    })
    .catch(err => {
        console.error(err)
    })
```

### Get most recent profiles

Default limit: 10

```js
const profileAPI = new ProfileAPI()

profileAPI
    .getMostRecentProfiles()
    .then(profiles => {
        // your code
    })
    .catch(err => {
        console.error(err)
    })
```

## PostAPI
