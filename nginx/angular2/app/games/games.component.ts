import {Component} from "angular2/core";
import {COMMON_DIRECTIVES} from "angular2/common";
import {GameDetailComponent} from "./game_detail.component";
import {OnInit} from "angular2/core";
import {Game} from "./game";
import {GameService} from "./game_service.service";

@Component({
    selector: 'my-games',
    templateUrl: 'app/games/games.html',
    styleUrls: ['app/games/games.css'],
    directives: [COMMON_DIRECTIVES, GameDetailComponent]
})
export class GamesComponent implements OnInit
{
    public title = 'Valiant Games';

    public games: Game[];
    public selectedGame: Game;

    constructor(private _gameService: GameService)
    {
        this.selectedGame = null;
    }

    select(game: Game)
    {
        this.selectedGame = game;
    }

    ngOnInit():any {
        this.getHeroes();
    }

    getHeroes()
    {
        this._gameService.getGames().then(games => this.games = games);
    }
}