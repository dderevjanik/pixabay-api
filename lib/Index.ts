import axios from 'axios';
import * as QueryString from 'querystring';
import { ImageRequest } from './PixabayRequest';
import { ImageResponse } from './PixabayResponse';
import { validateRequest } from './ValidateRequest';

const PIXABAY_URL = 'https://pixabay.com/api/?';

/**
 * Search for images on pixabay
 * @param key - you can obtain your authentication key by sign up on pixabay
 * @param searchQuery - search for image names, should not exceed 100 characters
 * @param request - pixabay request options, for more information visit
 * @param validate - should validate request ? It'll throw an error if validation fail
 * @throws {BadResponse}
 */
const searchImagesRequest = async (key: string, searchQuery: string, options: ImageRequest = {}, validate = true) => {
    const requestData = {
        ...options,
        key,
        q: QueryString.stringify(searchQuery),
    };

    if (validate) {
        validateRequest(requestData);
    }
    const response = await axios.post(PIXABAY_URL + QueryString.stringify(requestData));
    const responseData = response.data;

    if (!responseData.hits && !responseData.total && !responseData.totalHits) {
        throw new Error(`BadResponse: hits total totalHits are missing. make sure that you have right access token.`);
    }
    return responseData as ImageResponse;
};

// TODO: Add  search video request

/**
 * Authenticate user. You'll no longer need to write auth key on every searchImages request
 * @param key - you can obtain your key by sign up on pixabay
 */
export const authenticate = (key: string) => ({
    /**
     * Search for images on pixabay
     * @param searchQuery - search for image names, should not exceed 100 characters
     * @param request - pixabay request options, for more information visit
     * @param validate - should validate request ? It'll throw an error if validation fail
     * @throws {BadResponse}
     */
    searchImages: async (searchQuery: string, request: ImageRequest = {}, validate: boolean = true) =>
        await searchImagesRequest(key, searchQuery, request, validate),
    // TODO: Add search for videos request
    // searchVideosRequest:
});

// export const searchVideos = searchVideosRequest;

export const searchImages = searchImagesRequest;
