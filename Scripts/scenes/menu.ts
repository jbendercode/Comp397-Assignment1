/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

/*
    Josh Bender - 300746563
    Last updated - 10/03/2016
    Last Modified By - Josh Bender
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _startButton : objects.Button;
        private _menuLabel : objects.Label;
        private _menuImage : createjs.Bitmap;
        private _rotationDirection : number;

        // Menu Class Contructor
        constructor(){
            super();
        }

        public start() : void {
            // Set rotation direction of logo
            this._rotationDirection = 1;

            // Add menu label
            this._menuLabel = new objects.Label("The Dragon's Den", "26px Arial", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100);
            this.addChild(this._menuLabel);
            
            // Add menu image
            this._menuImage = new createjs.Bitmap(assets.getResult("Menu"));
            this._menuImage.x = config.Screen.CENTER_X;
            this._menuImage.y = config.Screen.CENTER_Y - 80;
            this._menuImage.regX = 150;
            this._menuImage.regY = 150;
            this.addChild(this._menuImage);
            
            // Add button to scene. Register for click callback function
            this._startButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            this._startButton.cursor = "pointer";
            
            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
            if (this._menuImage.scaleX < -1 || this._menuImage.scaleX > 1){
                this._rotationDirection *= -1;
            } 
            this._menuImage.scaleX -= this._rotationDirection * 0.01;
        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}