"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate requests if all information provided in requests are good
 */
exports.ValidateRequest = function (request) {
    if (request.q && request.q.length > 100) {
        throw new Error("Request.q: length = " + request.q.length + ".Length should not exceed 100 characters");
    }
    if (request.per_page) {
        if (request.per_page < 3 || request.per_page > 200) {
            throw new Error("Request.per_page: '" + request.per_page + "', but accepted values  3 - 200");
        }
    }
    if (request.page && request.page < 1) {
        throw new Error("Request.page: '" + request.page + "' should be higher than 0");
    }
};
