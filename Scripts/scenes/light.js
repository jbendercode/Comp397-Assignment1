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
    var Light = (function (_super) {
        __extends(Light, _super);
        function Light() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Light.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "You decide it best to investigate the light. You have high hopes that the light will lead you back to the " +
                "surface. As you approach the source of the light you quickly discern that it is probably coming through a " +
                "crack, high up and deeper into the cave. In front of you lies a rocky wall that looks as if it can be climbed " +
                "and a narrow tunnel that you may be able to squeeze through. As you move closer to the tunnel you feel warm air " +
                "moving through.";
            this._choice1 = "Climb the wall and continue exploring above.";
            this._choice2 = "Crawl through the tunnel to the other side.";
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
        Light.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        Light.prototype._choice1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.CLIFF;
            changeScene();
        };
        Light.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.TUNNEL;
            changeScene();
        };
        return Light;
    }(objects.Scene));
    scenes.Light = Light;
})(scenes || (scenes = {}));
//# sourceMappingURL=light.js.map