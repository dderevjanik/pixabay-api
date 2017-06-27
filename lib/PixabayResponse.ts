// TODO: Add description
export interface Hit {
    /**
     * Image Id
     */
    id: number;

    /**
     * Url to image's page
     */
    pageUrl: string;

    /**
     * Type of image
     */
    type: string;

    /**
     * Comma separated list of photo tags
     */
    tags: string;

    /**
     * Url to image preview
     */
    previewUrl: string;

    /**
     * Image preview width
     */
    previewWidth: number;

    /**
     * Image preview height
     */
    previewHeight: number;

    // TODO: Add description
    webformatURL: string;

    // TODO: Add description
    webformatWidth: number;

    // TODO: Add description
    webformatHeight: number;

    /**
     * Image width
     */
    imageWidth: number;

    /**
     * Image height
     */
    imageHeight: number;

    /**
     * Image size (width * height)
     */
    imageSize: number;

    /**
     * Number of image views
     */
    views: number;

    /**
     * Number of image downloads
     */
    downloads: number;

    /**
     * Number of image favorites
     */
    favorites: number;

    /**
     * Number of image likes
     */
    likes: number;

    /**
     * Number of image comments
     */
    comments: number;

    /**
     * Created by user id
     */
    user_id: number;

    /**
     * Username
     */
    user: string;

    /**
     * User logo
     */
    userImageURL: string;
}

// TODO: Add description
export interface ImageResponse {
    // TODO: Add description
    total: number;

    // TODO: Add description
    totalHits: number;

    // TODO: Add description
    hits: Hit[];
}

// TODO: Add pixabay video Response
