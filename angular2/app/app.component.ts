import {Component} from 'angular2/core';
import {TwitterFeedComponent} from "./tweets/twitter_feed.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app_component.html',
    directives: [TwitterFeedComponent],
    providers: []
})
export class AppComponent
{

}