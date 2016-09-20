/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._menuLabel = new objects.Label("Welcome to the Menu Scene", "26px Arial", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);
            // Add buttons to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
            this._gameOverButton = new objects.Button("GameOverBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this._gameOverButton.scaleX = 0.5;
            this._gameOverButton.scaleY = 0.5;
            this._gameOverButton.regX = 150;
            this._gameOverButton.regY = 50;
            this.addChild(this._gameOverButton);
            this._gameOverButton.on("click", this._gameOverButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        // Fucntion for when button is pressed
        Menu.prototype._gameOverButtonClick = function (event) {
            // Change global scene variable to GAMEOVER. Call global changeScene() function
            scene = config.Scene.GAMEOVER;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map