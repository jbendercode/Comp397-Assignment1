/*

    Game over scene - This scene will be called when the game ends.

*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // GameOver class constructor
        function GameOver() {
            _super.call(this);
        }
        // Run when the scene is started
        GameOver.prototype.start = function () {
            console.log("GameOver Scene started");
            // Add background
            this._bg = new createjs.Bitmap(assets.getResult("GameOverBG"));
            this.addChild(this._bg);
            // Add gameover to the global stage container
            stage.addChild(this);
        };
        // Run every tick
        GameOver.prototype.update = function () {
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map