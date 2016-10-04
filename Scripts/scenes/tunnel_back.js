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
    var TunnelBack = (function (_super) {
        __extends(TunnelBack, _super);
        function TunnelBack() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        TunnelBack.prototype.start = function () {
            // Assign values to the scene labels
            this._sceneDescription = "You try to unpin yourself from the chunk of rock holding you down, and finally with great effort, you pull free. As the " +
                "rock softly thuds against the ground next to you, the whole tunnel starts to shake again. In a matter of seconds you " +
                "are buried in the rubble. Somehow you think that you could have made better choices along the way.";
            this._choice2 = "Play Again";
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
        TunnelBack.prototype.update = function () {
            // Update objects
        };
        // Scene change functions
        TunnelBack.prototype._choice2Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return TunnelBack;
    }(objects.Scene));
    scenes.TunnelBack = TunnelBack;
})(scenes || (scenes = {}));
//# sourceMappingURL=tunnel_back.js.map