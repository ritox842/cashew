"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpCacheGuard = /** @class */ (function () {
    function HttpCacheGuard() {
    }
    return HttpCacheGuard;
}());
exports.HttpCacheGuard = HttpCacheGuard;
var DefaultHttpCacheGuard = /** @class */ (function () {
    function DefaultHttpCacheGuard() {
    }
    // TODO: rename.
    DefaultHttpCacheGuard.prototype.canActivate = function (request) {
        return request.method === 'GET' && request.responseType === 'json';
    };
    return DefaultHttpCacheGuard;
}());
exports.DefaultHttpCacheGuard = DefaultHttpCacheGuard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxodHRwQ2FjaGVHdWFyZC50cyIsIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7SUFFQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZxQix3Q0FBYztBQUlwQztJQUFBO0lBS0EsQ0FBQztJQUpDLGdCQUFnQjtJQUNoQiwyQ0FBVyxHQUFYLFVBQVksT0FBeUI7UUFDbkMsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQztJQUNyRSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHNEQUFxQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXEl0YXlcXHByb2plY3RzXFxvcGVuc291cmNlc1xcaHR0cC1jYWNoZVxccHJvamVjdHNcXG5nbmVhdFxcaHR0cC1jYWNoZVxcc3JjXFxsaWJcXGh0dHBDYWNoZUd1YXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDYWNoZVJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBDYWNoZUd1YXJkIHtcbiAgYWJzdHJhY3QgY2FuQWN0aXZhdGUocmVxdWVzdDogSHR0cENhY2hlUmVxdWVzdCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0SHR0cENhY2hlR3VhcmQgaW1wbGVtZW50cyBIdHRwQ2FjaGVHdWFyZCB7XG4gIC8vIFRPRE86IHJlbmFtZS5cbiAgY2FuQWN0aXZhdGUocmVxdWVzdDogSHR0cENhY2hlUmVxdWVzdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0dFVCcgJiYgcmVxdWVzdC5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9