System.register(["angular2/core", 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var TweetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService(http) {
                    var _this = this;
                    this.http = http;
                    this.tweetUrl = "http://thatcan.be/lib/get_tweets.php?";
                    this.numTweets = 200;
                    this.serverUrl = "http://127.0.0.1:8000/server/";
                    this.getCSRFToken().subscribe(function (response) { return _this.setCSRFToken(response); }, function (error) { return null; });
                }
                TweetService.prototype.setCSRFToken = function (response) {
                    var token = response.json();
                    this.csrf_token = token;
                };
                TweetService.prototype.getTweet = function (name) {
                    var fullTweetUrl = this.tweetUrl + "username=" + name + "&ntweets=" + this.numTweets;
                    return this.http.get(fullTweetUrl);
                };
                TweetService.prototype.getCSRFToken = function () {
                    var csrf_path = this.serverUrl + "get_csrf_token";
                    return this.http.get(csrf_path);
                };
                TweetService.prototype.getSavedTweets = function () {
                    var savedTweetsPath = this.serverUrl + "get_tweets";
                    return this.http.get(savedTweetsPath);
                };
                TweetService.prototype.getRandomSavedTweet = function () {
                    var savedTweetPath = this.serverUrl + "random_tweet";
                    return this.http.get(savedTweetPath);
                };
                TweetService.prototype.saveTweet = function (name, tweet) {
                    var body = JSON.stringify({ 'name': name, 'tweet': tweet });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json',
                        'X-CSRFToken': this.csrf_token });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var savePath = this.serverUrl + 'save_tweet';
                    return this.http.post(savePath, body, options);
                };
                TweetService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TweetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TweetService);
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map