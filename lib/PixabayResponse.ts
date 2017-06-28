/**
 * One current object after api response in hits
 */
export interface ImageHit {
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

export interface VideoSizeType {
    /**
     * Url where video can be found
     */
    url: number;

    /**
     * Video width
     */
    width: number;

    /**
     * Video height
     */
    height: number;

    /**
     * Video size
     */
    size: number;
}

/**
 * One current object after api response in hits
 */
export interface VideoHit {
    /**
     * A unique identifier for this video.
     */
    id: number;

    /**
     * This value may be used to retrieve static preview images of the video in various sizes:
     * https://i.vimeocdn.com/video/{ PICTURE_ID }_{ SIZE }.jpg
     * Available sizes: 100x75, 200x150, 295x166, 640x360, 960x540, 1920x1080
     * Exampe: https://i.vimeocdn.com/video/529927645_295x166.jpg
     */
    picture_id: string;

    /**
     * Source page on Pixabay.
     */
    pageURL: string;

    /**
     * Tyoe of the video, film, serail ect.
     */
    type: string;

    /**
     * Comma separated list of video tags
     */
    tags: string;

    /**
     * video duration
     */
    duration: number;

    /**
     * A set of differently sizes video streams:
     * "large": usually has a dimension of 1920x1080. If a large video version is not available, an empty URL value and
     * a size of zero is returned.
     * "medium": typically has a dimension of 1280x720 and is available for all Pixabay videos.
     * "small" typically has a dimension of 960x540, older videos have a dimension of 640x360.
     * This size is available for all videos.
     * "tiny" typically has a dimension of 640x360, older videos have a dimension of 480x270.
     * This size is available for all videos.
     * Append the GET parameter "download=1" to any of the video stream URLs to have them served as downloads.
     */
    videos: {
        large: VideoSizeType,
        medium: VideoSizeType,
        small: VideoSizeType,
        tiny: VideoSizeType,
    };

    /**
     * Total number of views.
     */
    views: number;

    /**
     * Total number of downloads.
     */
    downloads: number;

    /**
     * Total number of favorites.
     */
    favorites: number;

    /**
     * Total number of likes.
     */
    likes: number;

    /**
     * Total number of likes.
     */
    comments: number;

    /**
     * User ID and name of the contributor. Profile URL: https://pixabay.com/users/{ USERNAME }-{ ID }/
     */
    user_id: number;

    /**
     * Contributor user name
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
     * The number of videos accessible through the API. By default, the API is limited to return a
     * maximum of 500 videos per query.
     */
    totalHits: number;

    /**
     * The current images
     */
    hits: ImageHit[];
}

/**
 * Response from video api call pixabay
 */
export interface VideoResponse {
    /**
     * The total number of hits.
     */
    total: number;

    /**
     * The number of videos accessible through the API. By default, the API is limited to return a
     * maximum of 500 videos per query.
     */
    totalHits: number;

    /**
     * The current videos
     */
    hits: VideoHit[];
}
