import { ImageRequest } from './PixabayRequest';
import { ImageResponse } from './PixabayResponse';
import { VideoRequest } from './PixabayRequest';
import { VideoResponse } from './PixabayResponse';
/**
 * Authenticate user. You'll no longer need to write auth key on every searchImages request
 * @param key - you can obtain your key by sign up on pixabay
 */
export declare const authenticate: (key: string) => {
    searchImages: (searchQuery: string, request?: ImageRequest, validate?: boolean) => Promise<ImageResponse>;
    searchVideos: (searchQuery: string, request?: VideoRequest, validate?: boolean) => Promise<VideoResponse>;
};

