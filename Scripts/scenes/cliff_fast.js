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
    var CliffFast = (function (_super) {
        __extends(CliffFast, _super);
        function CliffFast() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        CliffFast.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "Not quite sure what you saw, you run towards the light. You have no idea what that was but you know you need to " +
                "get out of here fast. All of a sudden a roaring crash penetrates the air as a winged, scaly beast breaks through " +
                "the wall behind you. Knowing your time is limited you sprint with everything you have for the light. You can hear " +
                "the beast getting closer with each step and then the light gets brighter, way brighter. The whole cave is alight " +
                "with an orange glow and then an unworldy heat consumes you as the dragon's breath races through the hallway consuming " +
                "everything in it's wake. Somehow think that you could have made better choices along the way.";
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
        CliffFast.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        CliffFast.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return CliffFast;
    }(objects.Scene));
    scenes.CliffFast = CliffFast;
})(scenes || (scenes = {}));
//# sourceMappingURL=cliff_fast.js.map