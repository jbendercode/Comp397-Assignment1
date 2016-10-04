/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "Floating in the void, you hear muffled noises off in the distance. The pain in your head is excrutiating " +
                "and you feel groggy as if you were waking up from a hard night of partying. Slowly you open your eyes. " +
                "Taking the back of your sleeve, you wipe away some crust and look around. It is nearly impossible to see " +
                "anything. Taking in your surroundings you hear the sound of water off in the distance to your left and " +
                "you see a faint light illuminating the ground to your right. It seems you are stuck in some sort of cave " +
                "and you will need to find your way back to the surface.";
            this._choice1 = "Follow the sound of the water.";
            this._choice2 = "Head off in the direction of the light.";
            // Create Label for scene and add to Game Scene container
            this._sceneDescriptionLabel = new createjs.Text(this._sceneDescription, "18px Consolas", "#FFF");
            this._sceneDescriptionLabel.lineWidth = 620;
            this._sceneDescriptionLabel.lineHeight = 20;
            this._sceneDescriptionLabel.x = 10;
            this._sceneDescriptionLabel.y = 10;
            this.addChild(this._sceneDescriptionLabel);
            // Create choice buttons
            this._choice1Btn = new objects.Button("Choice", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this._choice1Btn.regX = 315;
            this._choice1Btn.regY = 50;
            this._choice1Btn.cursor = "pointer";
            this.addChild(this._choice1Btn);
            this._choice1Btn.on("click", this._choice1Click, this);
            this._choice2Btn = new objects.Button("Choice", config.Screen.CENTER_X, config.Screen.CENTER_Y + 185);
            this._choice2Btn.regX = 315;
            this._choice2Btn.regY = 50;
            this._choice2Btn.cursor = "pointer";
            this.addChild(this._choice2Btn);
            this._choice2Btn.on("click", this._choice2Click, this);
            // Create choice button labels
            this._choice1BtnLabel = new createjs.Text(this._choice1, "22px Consolas", "#FFF");
            this._choice1BtnLabel.lineWidth = 620;
            this._choice1BtnLabel.lineHeight = 100;
            this._choice1BtnLabel.x = 30;
            this._choice1BtnLabel.y = config.Screen.CENTER_Y + 70;
            this.addChild(this._choice1BtnLabel);
            this._choice2BtnLabel = new createjs.Text(this._choice2, "22px Consolas", "#FFF");
            this._choice2BtnLabel.lineWidth = 620;
            this._choice2BtnLabel.lineHeight = 100;
            this._choice2BtnLabel.x = 30;
            this._choice2BtnLabel.y = config.Screen.CENTER_Y + 175;
            this.addChild(this._choice2BtnLabel);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        Game.prototype._choice1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.WATER;
            changeScene();
        };
        Game.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.LIGHT;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map