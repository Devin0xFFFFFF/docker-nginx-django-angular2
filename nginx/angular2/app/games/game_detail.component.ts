import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {Input} from "angular2/core";
import {Game} from './game';

@Component({
    selector: 'my-game-detail',
    templateUrl: 'app/games/game_detail.html',
    directives: [COMMON_DIRECTIVES]
})
export class GameDetailComponent
{
    @Input() target_game: Game;

    constructor()
    {
        this.target_game = null;
    }
}