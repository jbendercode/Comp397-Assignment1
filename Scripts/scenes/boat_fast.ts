/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class BoatFast extends objects.Scene {

        // PRIVATE VARIABLES
        private _sceneDescriptionLabel : createjs.Text;
        private _choice2Btn : objects.Button;
        private _choice1BtnLabel : createjs.Text;
        private _choice2BtnLabel : createjs.Text;
        
        // Scene description and choices
        private _sceneDescription : string;
        private _choice2 : string;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Assign values to the scene labels
            this._sceneDescription =    "You decide that although you have no idea what you saw, it probably was something that doesn't need seeing. You " +
                                        "furiously paddle the boat, tearing your paddle through the water with all abandon. Looking behind you, it seems that " +
                                        "you have lost whatever it was and have covered a lot of distance. Craning your head back around to look for the " +
                                        "shoreline, you find yourself face to face with giant teeth dripping a slimy green substance. The creature is quickly closing around " +
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
        }

        public update() : void {
            // Update objects
        }

        // Scene change functions
        private _choice2Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
        
        
    }
}