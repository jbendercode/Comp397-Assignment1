/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton : objects.Button;
        private _menuLabel : objects.Label;
        private _gameOverButton : objects.Button;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._menuLabel = new objects.Label("Welcome to the Menu Scene", "26px Arial", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);
            
            // Add buttons to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
            
            this._gameOverButton = new objects.Button("GameOverBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this._gameOverButton.scaleX = 0.5;
            this._gameOverButton.scaleY = 0.5;
            this._gameOverButton.regX = 150;
            this._gameOverButton.regY = 50;
            this.addChild(this._gameOverButton);
            this._gameOverButton.on("click", this._gameOverButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }
        
        // Fucntion for when button is pressed
        private _gameOverButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAMEOVER. Call global changeScene() function
            scene = config.Scene.GAMEOVER;
            changeScene();
        }
    }
}