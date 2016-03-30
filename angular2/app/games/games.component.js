System.register(["angular2/core", "angular2/common", "./game_detail.component", "./game_service.service"], function(exports_1, context_1) {
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
    var core_1, common_1, game_detail_component_1, game_service_service_1;
    var GamesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (game_detail_component_1_1) {
                game_detail_component_1 = game_detail_component_1_1;
            },
            function (game_service_service_1_1) {
                game_service_service_1 = game_service_service_1_1;
            }],
        execute: function() {
            GamesComponent = (function () {
                function GamesComponent(_gameService) {
                    this._gameService = _gameService;
                    this.title = 'Valiant Games';
                    this.selectedGame = null;
                }
                GamesComponent.prototype.select = function (game) {
                    this.selectedGame = game;
                };
                GamesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                GamesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._gameService.getGames().then(function (games) { return _this.games = games; });
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-games',
                        templateUrl: 'app/games/games.html',
                        styleUrls: ['app/games/games.css'],
                        directives: [common_1.COMMON_DIRECTIVES, game_detail_component_1.GameDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [game_service_service_1.GameService])
                ], GamesComponent);
                return GamesComponent;
            }());
            exports_1("GamesComponent", GamesComponent);
        }
    }
});
//# sourceMappingURL=games.component.js.map