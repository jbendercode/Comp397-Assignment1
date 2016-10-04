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
    var CliffSlow = (function (_super) {
        __extends(CliffSlow, _super);
        function CliffSlow() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        CliffSlow.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "Scared of whatever is attached to that eye, you press your back against the wall, as you move into the shadows." +
                "Standing there, with that eye staring in your direction, you pray to the Gods of every religion you've ever " +
                "heard of and hope that you remain unseen. You hear a thud, and then another and then the whole cave is shaking. " +
                "All of a sudden the beast breaks through and it looks pissed. It spreads its scaly wings and starts shooting its " +
                "fiery in random directions. The stones glow white hot where the fire has touched. Out of nowhere the beast roars " +
                "and smashes through the ceiling of the cave, leaving a giant hole in it's wake. Still in shock, you slowly make your " +
                "way to the massive hole and climb through to the surface. YOU WIN!!!!!!!!!!!!!!!!";
            this._choice2 = "Back to Menu";
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
        CliffSlow.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        CliffSlow.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return CliffSlow;
    }(objects.Scene));
    scenes.CliffSlow = CliffSlow;
})(scenes || (scenes = {}));
//# sourceMappingURL=cliff_slow.js.map