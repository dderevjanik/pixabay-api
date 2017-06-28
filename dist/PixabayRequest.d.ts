/**
 * Base request, used in both image and video search requests
 */
export interface BaseRequest {
    /**
     * (required) Please login to see your API key.
     */
    key?: string;
}
/**
 * Pixabay request interface for images
 */
export interface ImageRequest extends BaseRequest {
    /**
     * A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters.
     * Example: "yellow+flower"
     */
    q?: string;
    /**
     * Language code of the language to be searched in.
     * Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el,
     * ja, ko, zh
     * @default "en"
     */
    lang?: string;
    /**
     * ID, hash ID, or a comma separated list of values for retrieving specific images.
     * In a comma separated list, IDs and hash IDs cannot be used together.
     */
    id?: string;
    /**
     * Choose between retrieving high resolution images and image details. When selecting details,
     * you can access images up to a dimension of 960 x 720 px.
     * Accepted values: "image_details", "high_resolution" (requires permission)
     * @default "image_details"
     */
    response_group?: 'image_details' | 'high_resolution';
    /**
     * Filter results by image type.
     * Accepted values: "all", "photo", "illustration", "vector"
     * @default "all"
     */
    image_type?: 'all' | 'photo' | 'illustration' | 'vector';
    /**
     * Whether an image is wider than it is tall, or taller than it is wide.
     * Accepted values: "all", "horizontal", "vertical"
     * @default "all"
     */
    orientation?: 'all' | 'horizontal' | 'vertical';
    /**
     * Filter results by category.
     * Accepted values: fashion, nature, backgrounds, science, education, people, feelings, religion, health, places,
     * animals, industry, food, computer, sports, transportation, travel, buildings, business, music
     */
    category?: string;
    /**
     * Minimum image width.
     * @default 0
     */
    min_width?: number;
    /**
     * Minimum image height.
     * @default 0
     */
    min_height?: number;
    /**
     * Select images that have received an Editor's Choice award.
     * Accepted values: "true", "false"
     * @default false
     */
    editors_choice?: boolean;
    /**
     * A flag indicating that only images suitable for all ages should be returned.
     * Accepted values: "true", "false"
     * @default false
     */
    safesearch?: boolean;
    /**
     * How the results should be ordered.
     * Accepted values: "popular", "latest"
     * @default "popular"
     */
    order?: 'popular' | 'latest';
    /**
     * Returned search results are paginated. Use this parameter to select the page number.
     * @default 1
     */
    page?: number;
    /**
     * Determine the number of results per page.
     * Accepted values: 3 - 200
     * @default 20
     */
    per_page?: number;
}
export interface VideoRequest extends BaseRequest {
    /**
     * A URL encoded search term.If omitted, all videos are returned.This value may not exceed 100 characters.
     * Example: "yellow+flower"
     */
    q?: string;
    /**
     * Language code of the language to be searched in.
     * Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja,
     * ko, zh
     * @default "en"
     */
    lang?: string;
    /**
     * ID or a comma separated list of values for retrieving specific videos.
     */
    id?: string;
    /**
     * Filter results by video type.
     * Accepted values: "all", "film", "animation"
     * @default "all"
     */
    video_type?: string;
    /**
     * Filter results by category.
     * Accepted values: fashion, nature, backgrounds, science, education, people, feelings, religion, health, places,
     * animals, industry, food, computer, sports, transportation, travel, buildings, business, music
     */
    category?: string;
    /**
     * Minimum video width.
     * @default: 0
     */
    min_width?: number;
    /**
     * Minimum video height.
     * @default 0
     */
    min_height?: number;
    /**
     * Select videos that have received an Editor's Choice award.
     * Accepted values: "true", "false"
     * @default false
     */
    editors_choice?: boolean;
    /**
     * A flag indicating that only videos suitable for all ages should be returned.
     * Accepted values: "true", "false"
     * @default false
     */
    safesearch?: boolean;
    /**
     * How the results should be ordered.
     * Accepted values: "popular", "latest"
     * @default "popular"
     */
    order?: string;
    /**
     * Returned search results are paginated.Use this parameter to select the page number.
     * @default: 1
     */
    page?: number;
    /**
     * Determine the number of results per page.
     * Accepted values: 3 - 200
     * @default 20
     */
    per_page?: number;
}
