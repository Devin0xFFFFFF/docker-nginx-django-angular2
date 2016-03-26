import {Component} from 'angular2/core';
import {GamesComponent} from "./games/games.component";
import {GameService} from "./games/game_service.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [GamesComponent],
    providers: [GameService]
})
export class AppComponent
{
    public title = 'Valiant Games';
}