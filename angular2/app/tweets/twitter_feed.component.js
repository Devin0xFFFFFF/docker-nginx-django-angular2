System.register(['angular2/core', "angular2/common", "./tweet.service"], function(exports_1, context_1) {
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
    var core_1, common_1, tweet_service_1;
    var TwitterFeedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TwitterFeedComponent = (function () {
                function TwitterFeedComponent(_tweetService) {
                    this._tweetService = _tweetService;
                    this.feed = [];
                    this.savedTweets = [];
                }
                TwitterFeedComponent.prototype.get_token = function () {
                    return this._tweetService.csrf_token;
                };
                TwitterFeedComponent.prototype.ngOnInit = function () {
                    this.getSavedTweets();
                };
                TwitterFeedComponent.prototype.ngDoCheck = function () {
                    return undefined;
                };
                TwitterFeedComponent.prototype.requestTweet = function (name) {
                    var _this = this;
                    this._tweetService.getTweet(name)
                        .subscribe(function (response) { return _this.addTweet(response); }, function (error) { return _this.errorMessage = error; });
                };
                TwitterFeedComponent.prototype.addTweet = function (response) {
                    var tweetInfo = response.json();
                    var random = Math.floor(Math.random() * (this._tweetService.numTweets - 1)) + 1;
                    var tweet = tweetInfo[random].text;
                    this.feed = this.feed.concat(tweet);
                };
                TwitterFeedComponent.prototype.addTweets = function (response) {
                    var tweets = response.json();
                    this.savedTweets = tweets;
                };
                TwitterFeedComponent.prototype.saveTweet = function (name, tweet) {
                    this._tweetService.saveTweet(name, tweet);
                };
                TwitterFeedComponent.prototype.getSavedTweets = function () {
                    var _this = this;
                    this._tweetService.getSavedTweets()
                        .subscribe(function (response) { return _this.addTweets(response); }, function (error) { return _this.errorMessage = error; });
                };
                TwitterFeedComponent = __decorate([
                    core_1.Component({
                        selector: 'my-twitter-feed',
                        templateUrl: 'app/tweets/twitter_feed.component.html',
                        directives: [common_1.COMMON_DIRECTIVES],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TwitterFeedComponent);
                return TwitterFeedComponent;
            }());
            exports_1("TwitterFeedComponent", TwitterFeedComponent);
        }
    }
});
//# sourceMappingURL=twitter_feed.component.js.map