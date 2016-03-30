/**
 * Created by devin on 3/29/2016.
 */
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {OnInit} from "angular2/core";
import {TweetService} from "./tweet.service";

@Component({
    selector: 'my-twitter-feed',
    templateUrl: 'app/tweets/twitter_feed.component.html',
    directives: [COMMON_DIRECTIVES],
    providers: [TweetService]
})
export class TwitterFeedComponent implements OnInit
{
    feed: String[];
    constructor()
    {
        this.feed = [];
    }

    ngOnInit():any {
        // this.getHeroes();
    }
}