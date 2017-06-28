# Pixabay-api

![travis_badge](https://travis-ci.org/dderevjanik/pixabay-api.svg?branch=master)

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

searchImages(AUTH_KEY, 'puppy').then((r) => console.log(r));
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

Searching for videos has same interface as searching for images

```js
import { searchImages } from 'pixabay-api';

searchVideos(AUTH_KEY, 'puppy');
```

Bad values for some props will throw an error

```js
await searchImages(AUTH_KEY, 'puppy', {per_page: 203});
// will throw an error:
// Error: Request.per_page: '203', but accepted values  3 - 200
```

To suppress those errors, turn off validation

```js
await searchImages(AUTH_KEY, 'puppy', {per_page: 203}, false);
// Will return bad http request, no error
```

with **Authenticate** you no longer need to add auth_key within `searchImages`

```js
import { authenticate } from 'pixabay-api';

const { searchImages, searchVideos } = authenticate(AUTH_KEY);
await searchImages('puppy'); // no need to add auth_key
await searchImages('birthday cake', {per_page: 20});  // no need to add auth_key
await searchVideos('dog'); // no need to add auth key

```

## FAQ

### How to obtain Authenticate Key ?

[sign up on pixabay.com](https://pixabay.com/en/accounts/register/)

### I cannot get response from searchImages or searchVideos

Probably you forget to add *auth_key* or you have bad one. First, make
sure that you have right *auth_key* by pasting this code (with your auth_key)
`https://pixabay.com/api/?key={ KEY }&response_group=high_resolution&q=yellow+flower`
in browser, you should see response similar to one in Example section.

### How to retrieve high resolution images ?

[request full api access](https://pixabay.com/api/docs/#api_support)
