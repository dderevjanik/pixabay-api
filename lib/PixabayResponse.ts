// TODO: Add description
export interface Hit {
    /**
     * 	A unique identifier for updating expired image URLs
     */
    id: number;

    /**
     * Source page on Pixabay, which provides a download link for the original image of the
     * dimension imageWidth x imageHeight and the file size imageSize
     */
    pageURL: string;

    /**
     * Type of image
     */
    type: string;

    /**
     * Comma separated list of photo tags
     */
    tags: string;

    /**
     * Low resolution images with a maximum width or height of 150 px (previewWidth x previewHeight)
     */
    previewUrl: string;

    /**
     * Preview image width
     */
    previewWidth: number;

    /**
     * Preview image height
     */
    previewHeight: number;

    /**
     * 	Medium sized image with a maximum width or height of 640 px (webformatWidth x webformatHeight).
     * URL valid for 24 hours.
     */
    webformatURL: string;

    /**
     * Web format width
     */
    webformatWidth: number;

    /**
     * Web format height
     */
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
     * Total number of views
     */
    views: number;

    /**
     * 	Total number of downloads
     */
    downloads: number;

    /**
     * Total number of favorites
     */
    favorites: number;

    /**
     * Total number of likes
     */
    likes: number;

    /**
     * Total number of comments
     */
    comments: number;

    /**
     * User ID of the contributor. Profile URL: https://pixabay.com/users/{ USERNAME }-{ ID }
     */
    user_id: number;

    /**
     * User name of the contributor. Profile URL: https://pixabay.com/users/{ USERNAME }-{ ID }
     */
    user: string;

    /**
     * Profile picture URL (250 x 250 px).
     */
    userImageURL: string;
}

/**
 * Response for pixabay image search request
 */
export interface ImageResponse {
    /**
     * The total number of hits.
     */
    total: number;

    /**
     * The number of images accessible through the API. By default, the API is limited to return a maximum of
     * 500 images per query.
     */
    totalHits: number;

    /**
     * Array of hits
     */
    hits: Hit[];
}

// TODO: Add pixabay video Response
