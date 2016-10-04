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
    var BoatFast = (function (_super) {
        __extends(BoatFast, _super);
        function BoatFast() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        BoatFast.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "You decide that although you have no idea what you saw, that it is probably something that doesn't need seeing. You " +
                "furiosuly paddle the boat, tearing your paddle through the water with all abandon. Looking behind you it seems that " +
                "you have lost whatever it was and have covered a lot of distance. Craning your head back around to look for the " +
                "shoreline you find yourself face to face with giant teeth dripping a slimy green substance and quickly closing around " +
                "you and your boat. Through the crunch of wood and the pain of being impaled by giant slime covered teeth, you somehow " +
                "think that you could have made better choices along the way.";
            this._choice2 = "Play again";
            // Create Label for scene and add to Game Scene container
            this._sceneDescriptionLabel = new createjs.Text(this._sceneDescription, "18px Consolas", "#FFF");
            this._sceneDescriptionLabel.lineWidth = 620;
            this._sceneDescriptionLabel.lineHeight = 20;
            this._sceneDescriptionLabel.x = 10;
            this._sceneDescriptionLabel.y = 10;
            this.addChild(this._sceneDescriptionLabel);
            this._choice2Btn = new objects.Button("Choice", config.Screen.CENTER_X, config.Screen.CENTER_Y + 185);
            this._choice2Btn.regX = 315;
            this._choice2Btn.regY = 50;
            this._choice2Btn.cursor = "pointer";
            this.addChild(this._choice2Btn);
            this._choice2Btn.on("click", this._choice2Click, this);
            // Create choice button labels
            this._choice2BtnLabel = new createjs.Text(this._choice2, "22px Consolas", "#FFF");
            this._choice2BtnLabel.lineWidth = 620;
            this._choice2BtnLabel.lineHeight = 100;
            this._choice2BtnLabel.x = 30;
            this._choice2BtnLabel.y = config.Screen.CENTER_Y + 175;
            this.addChild(this._choice2BtnLabel);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        BoatFast.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        BoatFast.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return BoatFast;
    }(objects.Scene));
    scenes.BoatFast = BoatFast;
})(scenes || (scenes = {}));
//# sourceMappingURL=boat_fast.js.map