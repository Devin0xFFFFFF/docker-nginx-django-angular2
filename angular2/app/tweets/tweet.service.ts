/**
 * Created by devin on 3/29/2016.
 */
import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TweetService
{
    tweetUrl = "http://thatcan.be/lib/get_tweets.php?";
    numTweets = 200;

    serverUrl = "http://127.0.0.1:8000/server/";
    csrf_token: String;

    constructor(private http: Http){
        this.getCSRFToken().subscribe(
            response => this.setCSRFToken(response),
            error =>  null);
    }

    setCSRFToken(response: Response)
    {
        var token = response.json();
        this.csrf_token = token;
    }

    getTweet(name: String)
    {
        var fullTweetUrl = this.tweetUrl + "username=" + name + "&ntweets=" + this.numTweets;
        return this.http.get(fullTweetUrl);
    }

    getCSRFToken()
    {
        var csrf_path = this.serverUrl + "get_csrf_token";
        return this.http.get(csrf_path);
    }

    getSavedTweets()
    {
        var savedTweetsPath = this.serverUrl + "get_tweets";
        return this.http.get(savedTweetsPath);
    }

    getRandomSavedTweet()
    {
        var savedTweetPath = this.serverUrl + "random_tweet";
        return this.http.get(savedTweetPath);
    }

    saveTweet(name: String, tweet: String)
    {
        let body = JSON.stringify({ 'name': name, 'tweet': tweet });
        let headers = new Headers({ 'Content-Type': 'application/json',
                                    'X-CSRFToken' : this.csrf_token});
        let options = new RequestOptions({ headers: headers });

        let savePath = this.serverUrl + 'save_tweet';

        return this.http.post(savePath, body, options);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}