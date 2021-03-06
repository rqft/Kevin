"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.HTTPHeaders = exports.ContentTypes = exports.StatusCodesText = exports.StatusCodes = exports.HTTPVerbs = void 0;
var HTTPVerbs;
(function (HTTPVerbs) {
    HTTPVerbs["GET"] = "GET";
    HTTPVerbs["POST"] = "POST";
    HTTPVerbs["PUT"] = "PUT";
    HTTPVerbs["DELETE"] = "DELETE";
    HTTPVerbs["PATCH"] = "PATCH";
    HTTPVerbs["HEAD"] = "HEAD";
    HTTPVerbs["OPTIONS"] = "OPTIONS";
    HTTPVerbs["CONNECT"] = "CONNECT";
    HTTPVerbs["TRACE"] = "TRACE";
    HTTPVerbs["COPY"] = "COPY";
    HTTPVerbs["LINK"] = "LINK";
    HTTPVerbs["UNLINK"] = "UNLINK";
    HTTPVerbs["PURGE"] = "PURGE";
    HTTPVerbs["LOCK"] = "LOCK";
    HTTPVerbs["UNLOCK"] = "UNLOCK";
    HTTPVerbs["PROPFIND"] = "PROPFIND";
    HTTPVerbs["VIEW"] = "VIEW";
    HTTPVerbs["ALL"] = "*";
})(HTTPVerbs = exports.HTTPVerbs || (exports.HTTPVerbs = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCodes[StatusCodes["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    StatusCodes[StatusCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["BANDWIDTH_LIMIT_EXCEEDED"] = 509] = "BANDWIDTH_LIMIT_EXCEEDED";
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    StatusCodes[StatusCodes["CONTINUE"] = 100] = "CONTINUE";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    StatusCodes[StatusCodes["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["FOUND"] = 302] = "FOUND";
    StatusCodes[StatusCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    StatusCodes[StatusCodes["GONE"] = 410] = "GONE";
    StatusCodes[StatusCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    StatusCodes[StatusCodes["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    StatusCodes[StatusCodes["IM_USED"] = 226] = "IM_USED";
    StatusCodes[StatusCodes["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCodes[StatusCodes["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    StatusCodes[StatusCodes["LOCKED"] = 423] = "LOCKED";
    StatusCodes[StatusCodes["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    StatusCodes[StatusCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    StatusCodes[StatusCodes["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    StatusCodes[StatusCodes["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    StatusCodes[StatusCodes["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    StatusCodes[StatusCodes["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    StatusCodes[StatusCodes["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
    StatusCodes[StatusCodes["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    StatusCodes[StatusCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    StatusCodes[StatusCodes["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    StatusCodes[StatusCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    StatusCodes[StatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    StatusCodes[StatusCodes["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    StatusCodes[StatusCodes["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    StatusCodes[StatusCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    StatusCodes[StatusCodes["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    StatusCodes[StatusCodes["PROCESSING"] = 102] = "PROCESSING";
    StatusCodes[StatusCodes["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    StatusCodes[StatusCodes["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    StatusCodes[StatusCodes["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    StatusCodes[StatusCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    StatusCodes[StatusCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    StatusCodes[StatusCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    StatusCodes[StatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    StatusCodes[StatusCodes["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    StatusCodes[StatusCodes["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    StatusCodes[StatusCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    StatusCodes[StatusCodes["UNORDERED_COLLECTION"] = 425] = "UNORDERED_COLLECTION";
    StatusCodes[StatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    StatusCodes[StatusCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    StatusCodes[StatusCodes["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    StatusCodes[StatusCodes["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    StatusCodes[StatusCodes["USE_PROXY"] = 305] = "USE_PROXY";
    StatusCodes[StatusCodes["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
exports.StatusCodesText = {
    [StatusCodes.ACCEPTED]: "Accepted",
    [StatusCodes.ALREADY_REPORTED]: "Already Reported",
    [StatusCodes.BAD_GATEWAY]: "Bad Gateway",
    [StatusCodes.BAD_REQUEST]: "Bad Request",
    [StatusCodes.BANDWIDTH_LIMIT_EXCEEDED]: "Bandwidth Limit Exceeded",
    [StatusCodes.CONFLICT]: "Conflict",
    [StatusCodes.CONTINUE]: "Continue",
    [StatusCodes.CREATED]: "Created",
    [StatusCodes.EXPECTATION_FAILED]: "Expectation Failed",
    [StatusCodes.FAILED_DEPENDENCY]: "Failed Dependency",
    [StatusCodes.FORBIDDEN]: "Forbidden",
    [StatusCodes.FOUND]: "Found",
    [StatusCodes.GATEWAY_TIMEOUT]: "Gateway Timeout",
    [StatusCodes.GONE]: "Gone",
    [StatusCodes.HTTP_VERSION_NOT_SUPPORTED]: "HTTP Version Not Supported",
    [StatusCodes.IM_A_TEAPOT]: "I'm a teapot",
    [StatusCodes.IM_USED]: "IM Used",
    [StatusCodes.INSUFFICIENT_STORAGE]: "Insufficient Storage",
    [StatusCodes.INTERNAL_SERVER_ERROR]: "Internal Server Error",
    [StatusCodes.LENGTH_REQUIRED]: "Length Required",
    [StatusCodes.LOCKED]: "Locked",
    [StatusCodes.LOOP_DETECTED]: "Loop Detected",
    [StatusCodes.METHOD_NOT_ALLOWED]: "Method Not Allowed",
    [StatusCodes.MISDIRECTED_REQUEST]: "Misdirected Request",
    [StatusCodes.MOVED_PERMANENTLY]: "Moved Permanently",
    [StatusCodes.MULTIPLE_CHOICES]: "Multiple Choices",
    [StatusCodes.MULTI_STATUS]: "Multi-Status",
    [StatusCodes.NETWORK_AUTHENTICATION_REQUIRED]: "Network Authentication Required",
    [StatusCodes.NON_AUTHORITATIVE_INFORMATION]: "Non-Authoritative Information",
    [StatusCodes.NOT_ACCEPTABLE]: "Not Acceptable",
    [StatusCodes.NOT_EXTENDED]: "Not Extended",
    [StatusCodes.NOT_FOUND]: "Not Found",
    [StatusCodes.NOT_IMPLEMENTED]: "Not Implemented",
    [StatusCodes.NOT_MODIFIED]: "Not Modified",
    [StatusCodes.NO_CONTENT]: "No Content",
    [StatusCodes.OK]: "OK",
    [StatusCodes.PARTIAL_CONTENT]: "Partial Content",
    [StatusCodes.PAYLOAD_TOO_LARGE]: "Payload Too Large",
    [StatusCodes.PAYMENT_REQUIRED]: "Payment Required",
    [StatusCodes.PERMANENT_REDIRECT]: "Permanent Redirect",
    [StatusCodes.PRECONDITION_FAILED]: "Precondition Failed",
    [StatusCodes.PRECONDITION_REQUIRED]: "Precondition Required",
    [StatusCodes.PROCESSING]: "Processing",
    [StatusCodes.PROXY_AUTHENTICATION_REQUIRED]: "Proxy Authentication Required",
    [StatusCodes.RANGE_NOT_SATISFIABLE]: "Range Not Satisfiable",
    [StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request Header Fields Too Large",
    [StatusCodes.REQUEST_TIMEOUT]: "Request Timeout",
    [StatusCodes.RESET_CONTENT]: "Reset Content",
    [StatusCodes.SEE_OTHER]: "See Other",
    [StatusCodes.SERVICE_UNAVAILABLE]: "Service Unavailable",
    [StatusCodes.SWITCHING_PROTOCOLS]: "Switching Protocols",
    [StatusCodes.TEMPORARY_REDIRECT]: "Temporary Redirect",
    [StatusCodes.TOO_MANY_REQUESTS]: "Too Many Requests",
    [StatusCodes.UNAUTHORIZED]: "Unauthorized",
    [StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS]: "Unavailable For Legal Reasons",
    [StatusCodes.UNORDERED_COLLECTION]: "Unordered Collection",
    [StatusCodes.UNPROCESSABLE_ENTITY]: "Unprocessable Entity",
    [StatusCodes.UNSUPPORTED_MEDIA_TYPE]: "Unsupported Media Type",
    [StatusCodes.UPGRADE_REQUIRED]: "Upgrade Required",
    [StatusCodes.URI_TOO_LONG]: "URI Too Long",
    [StatusCodes.USE_PROXY]: "Use Proxy",
    [StatusCodes.VARIANT_ALSO_NEGOTIATES]: "Variant Also Negotiates",
};
var ContentTypes;
(function (ContentTypes) {
    ContentTypes["APPLICATION_JSON"] = "application/json";
    ContentTypes["APPLICATION_XML"] = "application/xml";
    ContentTypes["APPLICATION_FORM_URLENCODED"] = "application/x-www-form-urlencoded";
    ContentTypes["APPLICATION_OCTET_STREAM"] = "application/octet-stream";
    ContentTypes["TEXT_HTML"] = "text/html";
    ContentTypes["TEXT_PLAIN"] = "text/plain";
    ContentTypes["TEXT_CSS"] = "text/css";
    ContentTypes["TEXT_JAVASCRIPT"] = "text/javascript";
    ContentTypes["TEXT_XML"] = "text/xml";
    ContentTypes["IMAGE_GIF"] = "image/gif";
    ContentTypes["IMAGE_JPEG"] = "image/jpeg";
    ContentTypes["IMAGE_PNG"] = "image/png";
    ContentTypes["IMAGE_SVG"] = "image/svg+xml";
    ContentTypes["IMAGE_WEBP"] = "image/webp";
    ContentTypes["IMAGE_ICO"] = "image/x-icon";
    ContentTypes["AUDIO_MP4"] = "audio/mp4";
    ContentTypes["AUDIO_MP3"] = "audio/mpeg";
    ContentTypes["AUDIO_OGG"] = "audio/ogg";
    ContentTypes["AUDIO_WEBM"] = "audio/webm";
    ContentTypes["VIDEO_MP4"] = "video/mp4";
    ContentTypes["VIDEO_WEBM"] = "video/webm";
    ContentTypes["VIDEO_OGG"] = "video/ogg";
    ContentTypes["VIDEO_MPEG"] = "video/mpeg";
    ContentTypes["VIDEO_QUICKTIME"] = "video/quicktime";
    ContentTypes["VIDEO_X_MS_WMV"] = "video/x-ms-wmv";
    ContentTypes["VIDEO_X_MS_ASF"] = "video/x-ms-asf";
})(ContentTypes = exports.ContentTypes || (exports.ContentTypes = {}));
var HTTPHeaders;
(function (HTTPHeaders) {
    HTTPHeaders["ACCEPT"] = "accept";
    HTTPHeaders["ACCEPT_LANGUAGE"] = "accept-language";
    HTTPHeaders["ACCEPT_PATCH"] = "accept-patch";
    HTTPHeaders["ACCEPT_RANGES"] = "accept-ranges";
    HTTPHeaders["ACCESS_CONTROL_ALLOW_CREDENTIALS"] = "access-control-allow-credentials";
    HTTPHeaders["ACCESS_CONTROL_ALLOW_HEADERS"] = "access-control-allow-headers";
    HTTPHeaders["ACCESS_CONTROL_ALLOW_METHODS"] = "access-control-allow-methods";
    HTTPHeaders["ACCESS_CONTROL_ALLOW_ORIGIN"] = "access-control-allow-origin";
    HTTPHeaders["ACCESS_CONTROL_EXPOSE_HEADERS"] = "access-control-expose-headers";
    HTTPHeaders["ACCESS_CONTROL_MAX_AGE"] = "access-control-max-age";
    HTTPHeaders["ACCESS_CONTROL_REQUEST_HEADERS"] = "access-control-request-headers";
    HTTPHeaders["ACCESS_CONTROL_REQUEST_METHOD"] = "access-control-request-method";
    HTTPHeaders["AGE"] = "age";
    HTTPHeaders["ALLOW"] = "allow";
    HTTPHeaders["ALT_SVC"] = "alt-svc";
    HTTPHeaders["AUTHORIZATION"] = "authorization";
    HTTPHeaders["CACHE_CONTROL"] = "cache-control";
    HTTPHeaders["CONNECTION"] = "connection";
    HTTPHeaders["CONTENT_DISPOSITION"] = "content-disposition";
    HTTPHeaders["CONTENT_ENCODING"] = "content-encoding";
    HTTPHeaders["CONTENT_LANGUAGE"] = "content-language";
    HTTPHeaders["CONTENT_LENGTH"] = "content-length";
    HTTPHeaders["CONTENT_LOCATION"] = "content-location";
    HTTPHeaders["CONTENT_RANGE"] = "content-range";
    HTTPHeaders["CONTENT_TYPE"] = "content-type";
    HTTPHeaders["COOKIE"] = "cookie";
    HTTPHeaders["DATE"] = "date";
    HTTPHeaders["ETAG"] = "etag";
    HTTPHeaders["EXPECT"] = "expect";
    HTTPHeaders["EXPIRES"] = "expires";
    HTTPHeaders["FORWARDED"] = "forwarded";
    HTTPHeaders["FROM"] = "from";
    HTTPHeaders["HOST"] = "host";
    HTTPHeaders["IF_MATCH"] = "if-match";
    HTTPHeaders["IF_MODIFIED_SINCE"] = "if-modified-since";
    HTTPHeaders["IF_NONE_MATCH"] = "if-none-match";
    HTTPHeaders["IF_UNMODIFIED_SINCE"] = "if-unmodified-since";
    HTTPHeaders["LAST_MODIFIED"] = "last-modified";
    HTTPHeaders["LOCATION"] = "location";
    HTTPHeaders["ORIGIN"] = "origin";
    HTTPHeaders["PRAGMA"] = "pragma";
    HTTPHeaders["PROXY_AUTHENTICATE"] = "proxy-authenticate";
    HTTPHeaders["PROXY_AUTHORIZATION"] = "proxy-authorization";
    HTTPHeaders["PUBLIC_KEY_PINS"] = "public-key-pins";
    HTTPHeaders["RANGE"] = "range";
    HTTPHeaders["REFERRER"] = "referer";
    HTTPHeaders["RETRY_AFTER"] = "retry-after";
    HTTPHeaders["SEC_WEB_SOCKET_ACCEPT"] = "sec-websocket-accept";
    HTTPHeaders["SEC_WEB_SOCKET_EXTENSIONS"] = "sec-websocket-extensions";
    HTTPHeaders["SEC_WEB_SOCKET_KEY"] = "sec-websocket-key";
    HTTPHeaders["SEC_WEB_SOCKET_PROTOCOL"] = "sec-websocket-protocol";
    HTTPHeaders["SEC_WEB_SOCKET_VERSION"] = "sec-websocket-version";
    HTTPHeaders["SET_COOKIE"] = "set-cookie";
    HTTPHeaders["STRICT_TRANSPORT_SECURITY"] = "strict-transport-security";
    HTTPHeaders["TK"] = "tk";
    HTTPHeaders["TRAILER"] = "trailer";
    HTTPHeaders["TRANSFER_ENCODING"] = "transfer-encoding";
    HTTPHeaders["UPGRADE"] = "upgrade";
    HTTPHeaders["USER_AGENT"] = "user-agent";
    HTTPHeaders["VARY"] = "vary";
    HTTPHeaders["VIA"] = "via";
    HTTPHeaders["WARNING"] = "warning";
    HTTPHeaders["WWW_AUTHENTICATE"] = "www-authenticate";
})(HTTPHeaders = exports.HTTPHeaders || (exports.HTTPHeaders = {}));
var Module;
(function (Module) {
    Module["HTTP"] = "http";
    Module["HTTPS"] = "https";
})(Module = exports.Module || (exports.Module = {}));
