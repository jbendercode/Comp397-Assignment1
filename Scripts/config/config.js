/*
    Module to store globally accessible values and states for the game.
*/
/*
    Josh Bender - 300746563
    Last updated - 10/03/2016
    Last Modified By - Josh Bender
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.GAME = 1;
        Scene.WATER = 2;
        Scene.LIGHT = 3;
        Scene.BOAT = 4;
        Scene.PATH = 5;
        Scene.BOAT_FAST = 6;
        Scene.BOAT_SLOW = 7;
        Scene.PATH_FAST = 8;
        Scene.PATH_SLOW = 9;
        Scene.CLIFF = 10;
        Scene.TUNNEL = 11;
        Scene.CLIFF_FAST = 12;
        Scene.CLIFF_SLOW = 13;
        Scene.TUNNEL_PUSH = 14;
        Scene.TUNNEL_BACK = 15;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = Screen.WIDTH / 2;
        Screen.CENTER_Y = Screen.HEIGHT / 2;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map