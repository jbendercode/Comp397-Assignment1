/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Water extends objects.Scene {

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
            // Assign values to the scene labels
            this._sceneDescription =    "You decide to head off towards the water. You are not sure where you are but the movement of the water " +
                                        "encourages you and you think, 'If there is a way out of here, that is it.' As the sound gets louder you " +
                                        "approach an underground beach of sorts. There looks to be an old boat with an oar that is partially damaged " +
                                        "and a narrow path leading around the edge of the river. ";
                                        
            this._choice1 = "Take the boat accross the river.";
            this._choice2 = "Walk the path around the edge of the river.";

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
            scene = config.Scene.BOAT;
            changeScene();
        }
        
        private _choice2Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.PATH;
            changeScene();
        }
        
        
    }
}