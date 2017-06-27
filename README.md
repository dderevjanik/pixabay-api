# Pixabay-api

Full documentation here

[https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)

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

pixabay.searchImage('auth_key', {q: 'puppy'});
```

Bad value for some props will throw an error

```js
pixabay.searchImage('auth_key', {per_page: 203});
// will throw an error:
// Error: Request.per_page: '203', but accepted values  3 - 200
```

To silent those errors, turn validate off

```js
pixabay.searchImage('auth_key', {per_page: 203}, false);
// Will return bad http request, no error
```
