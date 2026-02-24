# API Classes

## ProfileAPI

### Get profile by ID

Promise

```js
const profileAPI = new ProfileAPI()
const profileId = "699c4e200bc1de001577b7b6"

profileAPI
  .getProfileById(profileId)
  .then((profile) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get my profile

Promise

```js
const profileAPI = new ProfileAPI()

profileAPI
  .getMyProfile()
  .then((profile) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Update my profile

Promise

```js
const profileAPI = new ProfileAPI()
const newProfileFields = {
  username: "<my new username>",
  bio: "<my new bio>",
  // more fields if needed
}

profileAPI
  .updateMyProfile(newProfileFields)
  .then((profile) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get profiles

Promise

Default limit: 10

```js
const profileAPI = new ProfileAPI()

profileAPI
  .getProfiles()
  .then((profiles) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get most recent profiles

Promise

Default limit: 10

```js
const profileAPI = new ProfileAPI()

profileAPI
  .getMostRecentProfiles()
  .then((profiles) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

## PostAPI

### Get post by ID

Promise

```js
const postAPI = new PostAPI()
const postId = "xxx"

postAPI
  .getPostById(postId)
  .then((post) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get posts

Promise

Default limit: 10

```js
const postAPI = new PostAPI()

postAPI
  .getPosts()
  .then((posts) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get most recent posts

Promise

Default limit: 10

```js
const postAPI = new PostAPI()

postAPI
  .getMostRecentPosts()
  .then((posts) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Add post

Promise

```js
const postAPI = new PostAPI()
const newPostFields = {
    text: "xxx"
}

postAPI
  .addPost(newPostFields)
  .then((post) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Update post

Promise

```js
const postAPI = new PostAPI()
const postId = "xxx"
const newPostFields = {
    text: "xxx"
}

postAPI
  .updatePostById(postId, newPostFields)
  .then((post) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Delete post

Promise

Default limit: 10

```js
const postAPI = new PostAPI()
const postId = "xxx"

postAPI
  .deletePostById(postId)
  .then(() => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```
