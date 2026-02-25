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

### Get API users (Giuseppe, Giorgia, Raffaele, Giulia, Franceso)

Promise

```js
const profileAPI = new ProfileAPI()

profileAPI
  .getAPIUsers()
  .then((APIUsers) => {
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
  text: "xxx",
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
  text: "xxx",
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

```js
const postAPI = new PostAPI()
const postId = "xxx"

postAPI
  .deletePostById(postId)
  .then((textResponse) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Generate & add AI posts with random profiles

Promise

Default how many: 5

```js
const postAPI = new PostAPI()
const postThemes = ["programming & software", "cooking", "career growth"]

postAPI
  .generateAndAddAIPostsWithRandomProfiles(postThemes)
  .then((posts) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

## CommentAPI

Comments are added to posts. For posts, see PostAPI.

Post model

```
{
    "_id": "67f4ee8381b0dd00150a7a4a",
    "comment": "LUCA TI AMOOO",
    "rate": 5,
    "elementId": "0235",
    "author": "re.luca95@gmail.com",
    "createdAt": "2025-04-08T09:38:11.122Z",
    "createdAtForUI": "8 apr 2025, 09:38",
    "updatedAt": "2025-04-08T09:38:11.122Z",
    "__v": 0
}
```

### Add comment

Promise

```js
const commentAPI = new CommentAPI()
const newCommentFields = {
  comment: "<my comment>",
  postId: "<post id>",
}

commentAPI
  .addComment(newCommentFields)
  .then((comment) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get comments

Promise

```js
const commentAPI = new CommentAPI()

commentAPI
  .getComments()
  .then((comments) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Get most recent comments of a post

Promise

```js
const commentAPI = new CommentAPI()
const postId = "xxx"

commentAPI
  .getMostRecentCommentsOfPost(postId)
  .then((comments) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Update comment

Promise

```js
const commentAPI = new CommentAPI()
const commentId = "xxx"
const newCommentFields = {
  comment: "<my new comment>",
}

commentAPI
  .updateCommentById(commentId, newCommentFields)
  .then((comment) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```

### Delete comment

Promise

```js
const commentAPI = new CommentAPI()
const commentId = "xxx"

commentAPI
  .deleteCommentById(commentId)
  .then((textResponse) => {
    // your code
  })
  .catch((err) => {
    console.error(err)
  })
```
