import axios from 'axios';
import * as QueryString from 'querystring';
import { ImageRequest, VideoRequest } from './PixabayRequest';
import { ImageResponse, VideoResponse } from './PixabayResponse';
import { validateRequest } from './ValidateRequest';

const PIXABAY_URL_IMAGES = 'https://pixabay.com/api/?';
const PIXABAY_URL_VIDEOS = 'https://pixabay.com/api/videos?';

/**
 * Search for images on pixabay
 * @param key - you can obtain your authentication key by sign up on pixabay
 * @param query - search for image names, should not exceed 100 characters
 * @param options - pixabay request options, for more information visit
 * @param validate - should validate request ? It'll throw an error if validation fail
 * @throws {BadResponse}
 */
const searchImagesReq = async (key: string, query: string, options: ImageRequest = {}, validate = true) => {
    const requestData = {
        ...options,
        key,
        q: query,
    };

    if (validate) {
        validateRequest(requestData);
    }

    const response = await axios.post(PIXABAY_URL_IMAGES + QueryString.stringify(requestData));
    const responseData = response.data;

    if (!responseData.hits && !responseData.total && !responseData.totalHits) {
        throw new Error(`BadResponse: hits total totalHits are missing. make sure that you have right access token.`);
    }
    return responseData as ImageResponse;
};

/**
 * Search for images on pixabay
 * @param key - you can obtain your authentication key by sign up on pixabay
 * @param query - search for video names, should not exceed 100 characters
 * @param options - pixabay request options, for more information visit
 * @param validate - should validate request ? It'll throw an error if validation fail
 * @throws {BadResponse}
 */
const searchVideosReq = async (key: string, query: string, options: VideoRequest = {}, validate: boolean = true) => {
    const requestData = {
        ...options,
        key,
        q: query,
    };

    if (validate) {
        validateRequest(options);
    }

    const response = (await axios.post(PIXABAY_URL_VIDEOS + QueryString.stringify(options))).data;
    if (!response.hits && !response.total && !response.totalHits) {
        throw new Error(`BadResponse: hits total totalHits are missing. make sure that you have right access token.`);
    }
    return response as VideoResponse;
};

/**
 * Authenticate user. You'll no longer need to write auth key on every searchImages or searchVideos request
 * @param key - you can obtain your key by sign up on pixabay
 */
export const authenticate = (key: string) => ({
    /**
     * Search for images on pixabay
     * @param query - search for image names, should not exceed 100 characters
     * @param options - pixabay request options, for more information visit https://pixabay.com/api/docs/
     * @param validate - should validate request ? It'll throw an error if validation fail
     * @throws {BadResponse}
     */
    searchImages: async (query: string, options: ImageRequest = {}, validate: boolean = true) =>
        await searchImagesReq(key, query, options, validate),

    /**
     * Search for videos on pixabay
     * @param query - search for video names, should not exceed 100 characters
     * @param options - pixabay request options, for more information visit https://pixabay.com/api/docs/
     * @param validate - should validate request ? It'll throw an error if validation fail
     * @throws {BadResponse}
     */
    searchVideos: async (query: string, options: VideoRequest = {}, validate: boolean = true) =>
        await searchVideosReq(key, query, options, validate),
});

export const searchImages = searchImagesReq;
export const searchVideos = searchVideosReq;
