import { ImageRequest } from './PixabayRequest';
import { ImageResponse } from './PixabayResponse';
/**
 * Authenticate user. You'll no longer need to write auth key on every searchImages request
 * @param key - you can obtain your key by sign up on pixabay
 */
export declare const authenticate: (key: string) => {
    searchImages: (searchQuery: string, request?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
};
export declare const searchImages: (key: string, searchQuery: string, options?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
