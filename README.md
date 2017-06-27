# Pixabay-api

All images and videos on Pixabay are released free of copyrights under Creative Commons CC0. You may download, modify, distribute, and use them royalty free for anything you like, even in commercial applications. Attribution is not required.

Pixabay API docs:  [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)

## Installation

```bash
npm install pixabay-api
```

In order to get result of `searchImages` or `searchVideos` you need authenticate key,
which can be obtained by [sign up on pixabay.com](https://pixabay.com/en/accounts/register/)

## Examples

Basic example

```js
import { searchImages } from 'pixabay-api';

searchImages('auth_key', 'puppy');
// { totalHits: 500,
//   hits:
//    [ { previewHeight: 99,
//        likes: 108,
//        favorites: 87,
//        tags: 'chihuahua, dog, puppy',
//        webformatHeight: 426,
//        views: 38770,
//        webformatWidth: 640,
//        previewWidth: 150,
//        comments: 17,
//        downloads: 11050,
//        pageURL: 'https://pixabay.com/en/chihuahua-dog-puppy-cute-pet-621112/',
//        previewURL: 'https://cdn.pixabay.com/photo/2015/02/02/17/06/chihuahua-621112_150.jpg',
//        webformatURL: 'https://pixabay.com/get/ef37b00e29f61c2ad65a5854e34b4294e277eac818b5184993f0c07fafe9_640.jpg',
//        imageWidth: 5184,
//        user_id: 740400,
//        user: 'Teerasuwat',
//        type: 'photo',
//        id: 621112,
//        userImageURL: 'https://cdn.pixabay.com/user/2015/02/02/17-19-43-530_250x250.jpg',
//        imageHeight: 3456 },
//        ...
//    ],
//   total: 3343
// }
```

Bad value for some props will throw an error

```js
searchImages('auth_key', 'puppy', {per_page: 203});
// will throw an error:
// Error: Request.per_page: '203', but accepted values  3 - 200
```

To silent those errors, turn validate off

```js
searchImages('auth_key', 'puppy', {per_page: 203}, false);
// Will return bad http request, no error
```

with **Authenticate** you no longer need to add auth_key within `searchImages`

```js
import { authenticate } from 'pixabay-api';

const { searchImages } = authenticate('auth_key');
searchImages('puppy'); // no need to add auth_key
searchImages('birthday cake');  // no need to add auth_key

```
