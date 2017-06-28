import { ImageRequest, VideoRequest } from './PixabayRequest';
import { ImageResponse, VideoResponse } from './PixabayResponse';
/**
 * Authenticate user. You'll no longer need to write auth key on every searchImages or searchVideos request
 * @param key - you can obtain your key by sign up on pixabay
 */
export declare const authenticate: (key: string) => {
    searchImages: (query: string, options?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
    searchVideos: (query: string, options?: VideoRequest, validate?: boolean) => Promise<VideoResponse>;
};
export declare const searchImages: (key: string, query: string, options?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
export declare const searchVideos: (key: string, query: string, options?: VideoRequest, validate?: boolean) => Promise<VideoResponse>;
