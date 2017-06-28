import { ImageRequest, VideoRequest } from './PixabayRequest';
/**
 * Validate requests if all information provided in requests are valid
 * If something is wrong with request (e.g minus number) it'll throw an Error
 * @param request - request to validate
 * @throws {BadRequest}
 */
export declare const validateRequest: (request: ImageRequest | VideoRequest) => void;
