import { ImageRequest } from './PixabayRequest';
import { ImageResponse } from './PixabayResponse';
/**
 * Authenticate user. You'll no longer need to write auth key on every request call
 * @param key - you can obtain your key by sign up on pixabay
 */
export declare const authenticate: (key: string) => Promise<{
    searchImagesRequest: (searchQuery: string, request?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
}>;
export declare const searchImages: (authenticateKey: string, searchQuery: string, options?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
