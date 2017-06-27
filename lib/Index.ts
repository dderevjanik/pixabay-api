import axios from 'axios';
import * as QueryString from 'querystring';
import { ImageRequest } from './PixabayRequest';
import { ImageResponse } from './PixabayResponse';
import { validateRequest } from './ValidateRequest';

const PIXABAY_URL = 'https://pixabay.com/api/?';

/**
 * Search for image on pixabay
 * @param authenticateKey - you can obtain your key by sign up on pixabay
 * @param searchQuery - search for image names, should not exceed 100 characters
 * @param request - pixabay request
 * @param validate - should validate request ? It'll throw an error if validation fail
 */
const searchImagesRequest = async (authenticateKey: string, searchQuery: string, options: ImageRequest = {}, validate: boolean = true) => {
    options.q = QueryString.stringify(searchQuery);
    options.key = authenticateKey;
    if (validate) {
        validateRequest(options);
    }
    const response = (await axios.post(PIXABAY_URL + QueryString.stringify(options))).data;
    if (!response.hits && !response.total && !response.totalHits) {
        // TODO: more descriptive error
        throw new Error('bad response');
    }
    return response as ImageResponse;
};

// TODO: Finish search video request
// const searchVideosRequest = (authenticateKey: string, request: VideoRequest, validate: boolean = true) => {
//     if (validate) {
//         validateRequest(request);
//     }
// };

/**
 * Authenticate user. You'll no longer need to write auth key on every request call
 * @param key - you can obtain your key by sign up on pixabay
 */
export const authenticate = async (key: string) => ({
    /**
     * Search for image son pixabay
     * @param request - pixabay request
     * @param validate - should validate request ? It'll throw an error if validation fail
     */
    searchImages: async (searchQuery: string, request: ImageRequest = {}, validate: boolean = true) =>
        await searchImagesRequest(key, searchQuery, request, validate),
    // TODO: Add search for videos request
    // searchVideosRequest:
});

// export const searchVideos = searchVideosRequest;

export const searchImages = searchImagesRequest;

(async function () {
    console.log(await searchImages('5742108-fe9cf15fad2e97b7952502be3', 'big cake'));
})();
