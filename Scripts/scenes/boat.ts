/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Boat extends objects.Scene {

        // PRIVATE VARIABLES
        private _sceneDescriptionLabel : createjs.Text;
        private _choice1Btn : objects.Button;
        private _choice2Btn : objects.Button;
        private _choice1BtnLabel : createjs.Text;
        private _choice2BtnLabel : createjs.Text;
        
        // Scene description and choices
        private _sceneDescription : string;
        private _choice1 : string;
        private _choice2 : string;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");
            
            // Assign values to the scene labels
            this._sceneDescription =    "You approach the boat. You notice that the oar has a chunk missing from the end of it but that it still " +
                                        "looks to be functional. Slowly wading in you push the boat accross the water and hop in. Although the paddle " +
                                        "is damaged, you manage to build up some speed and begin your journey accross the river. A little more than " +
                                        "halfway accross you notice a large ripple in the water and it seems to be moving in your direction.";
                                        
            this._choice1 = "Paddle like hell for the other side.";
            this._choice2 = "Stop paddling and let the boat glide silently.";

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
        }

        public update() : void {
            // Update objects
        }

        // Scene change functions
        private _choice1Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BOAT_FAST;
            changeScene();
        }
        
        private _choice2Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BOAT_SLOW;
            changeScene();
        }
        
        
    }
}