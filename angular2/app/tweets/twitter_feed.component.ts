/**
 * Created by devin on 3/29/2016.
 */
import {Component, DoCheck} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {OnInit} from "angular2/core";
import {TweetService} from "./tweet.service";
import {Response} from "angular2/http";

@Component({
    selector: 'my-twitter-feed',
    templateUrl: 'app/tweets/twitter_feed.component.html',
    directives: [COMMON_DIRECTIVES],
    providers: [TweetService]
})
export class TwitterFeedComponent implements OnInit, DoCheck
{
    feed: String[];
    errorMessage: String;

    savedTweets: String[];

    constructor(private _tweetService: TweetService)
    {
        this.feed = [];
        this.savedTweets = [];
    }

    get_token()
    {
        return this._tweetService.csrf_token;
    }

    ngOnInit():any {
        this.getSavedTweets();
    }

    ngDoCheck():any {
        return undefined;
    }

    requestTweet(name: String)
    {
        this._tweetService.getTweet(name)
            .subscribe(
                response => this.addTweet(response),
                error =>  this.errorMessage = <any>error);
    }

    addTweet(response: Response)
    {
        var tweetInfo = response.json();
        var random = Math.floor(Math.random() * (this._tweetService.numTweets - 1)) + 1;
        var tweet = tweetInfo[random].text;
        this.feed = this.feed.concat(tweet);
    }

    addTweets(response: Response)
    {
        var tweets = response.json();
        this.savedTweets = tweets;
    }

    saveTweet(name: string, tweet:string)
    {
        this._tweetService.saveTweet(name, tweet);
    }

    getSavedTweets()
    {
        this._tweetService.getSavedTweets()
            .subscribe(
                response => this.addTweets(response),
                error =>  this.errorMessage = <any>error);
    }
}