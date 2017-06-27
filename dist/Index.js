"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var QueryString = require("querystring");
var ValidateRequest_1 = require("./ValidateRequest");
var PIXABAY_URL = 'https://pixabay.com/api/?';
/**
 * Search for image on pixabay
 * @param authenticateKey - you can obtain your key by sign up on pixabay
 * @param searchQuery - search for image names, should not exceed 100 characters
 * @param request - pixabay request
 * @param validate - should validate request ? It'll throw an error if validation fail
 */
var searchImagesRequest = function (authenticateKey, searchQuery, options, validate) {
    if (options === void 0) { options = {}; }
    if (validate === void 0) { validate = true; }
    return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options.q = QueryString.stringify(searchQuery);
                    options.key = authenticateKey;
                    if (validate) {
                        ValidateRequest_1.validateRequest(options);
                    }
                    return [4 /*yield*/, axios_1.default.post(PIXABAY_URL + QueryString.stringify(options))];
                case 1:
                    response = (_a.sent()).data;
                    if (!response.hits && !response.total && !response.totalHits) {
                        // TODO: more descriptive error
                        throw new Error('bad response');
                    }
                    return [2 /*return*/, response];
            }
        });
    });
};
// TODO: Finish search video request
// const searchVideosRequest = (authenticateKey: string, request: VideoRequest, validate: boolean = true) => {
//     if (validate) {
//         validateRequest(request);
//     }
// };
/**
 * Authenticate user. You'll no longer need to write auth key on every request call
 * @param key - you can obtain your key by sign up on pixabay
 */
exports.authenticate = function (key) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, ({
                /**
                 * Search for image son pixabay
                 * @param request - pixabay request
                 * @param validate - should validate request ? It'll throw an error if validation fail
                 */
                searchImagesRequest: function (searchQuery, request, validate) {
                    if (request === void 0) { request = {}; }
                    if (validate === void 0) { validate = true; }
                    return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, searchImagesRequest(key, searchQuery, request, validate)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); });
                },
            })];
    });
}); };
// export const searchVideos = searchVideosRequest;
exports.searchImages = searchImagesRequest;
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = console).log;
                    return [4 /*yield*/, exports.searchImages('5742108-fe9cf15fad2e97b7952502be3', 'big cake')];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
})();
//# sourceMappingURL=Index.js.map