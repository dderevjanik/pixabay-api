/**
 * One current object after api response in hits
 */
export interface ImageHit {
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
    /**
     * Medium sized image with a maximum width or height of 640 px (webformatWidth x webformatHeight). URL valid for 24 hours.
     * Replace '_640' in any webformatURL value to access other image sizes:
     * Replace with '_180' or '_340' to get a 180 or 340 px tall version of the image, respectively. Replace with '_960' to get the image in a maximum dimension of 960 x 720 px.
     */
    webformatURL: string;
    /** */
    webformatWidth: number;
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
    picture_id: number;
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
     *	A set of differently sizes video streams:
     * "large" usually has a dimension of 1920x1080. If a large video version is not available, an empty URL value and a size of zero is returned.
     * "medium" typically has a dimension of 1280x720 and is available for all Pixabay videos.
     * "small" typically has a dimension of 960x540, older videos have a dimension of 640x360. This size is available for all videos.
     * "tiny" typically has a dimension of 640x360, older videos have a dimension of 480x270. This size is available for all videos.
     * Append the GET parameter "download=1" to any of the video stream URLs to have them served as downloads.
     */
    videos: {
        large: VideoSizeType;
        medium: VideoSizeType;
        small: VideoSizeType;
        tiny: VideoSizeType;
    };
    /**
     *Total number of views.
     */
    views: number;
    /**
     *	Total number of downloads.
     */
    downloads: number;
    /**
     *Total number of favorites.
     */
    favorites: number;
    /**
     *	Total number of likes.
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
 * Response from image api call pixabay
 */
export interface ImageResponse {
    /**
     * The total number of hits.
     */
    total: number;
    /**
     * The number of videos accessible through the API. By default, the API is limited to return a maximum of 500 videos per query.
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
     * The number of videos accessible through the API. By default, the API is limited to return a maximum of 500 videos per query.
     */
    totalHits: number;
    /**
     * The current videos
     */
    hits: VideoHit[];
}
