/*

    Game over scene - This scene will be called when the game ends.

*/

module scenes {
    
    export class GameOver extends objects.Scene {
        
        private _bg : createjs.Bitmap;
        
        // GameOver class constructor
        constructor(){
            super();
        }
        
        // Run when the scene is started
        public start() : void {
            console.log("GameOver Scene started");
            
            // Add background
            this._bg = new createjs.Bitmap(assets.getResult("GameOverBG"));
            this.addChild(this._bg);
            
            // Add gameover to the global stage container
            stage.addChild(this);
        }

        // Run every tick
        public update() : void {

        }
    }
    
}