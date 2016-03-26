import {Injectable} from "angular2/core";
import {GAMES} from "../mock/mock_games";
/**
 * Created by Devin White on 13-Feb-16.
 */

@Injectable()
export class GameService
{
    getGames()
    {
        return Promise.resolve(GAMES);
    }
}