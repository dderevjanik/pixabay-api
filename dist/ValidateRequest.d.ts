import { ImageRequest } from './PixabayRequest';
/**
 * Validate requests if all information provided in requests are good
 * If something is wrong with request (e.g minus number) it'll throw an Error
 * @param request - request to validate
 */
export declare const validateRequest: (request: ImageRequest) => void;
