/*
    Module to store globally accessible values and states for the game.
*/

/*
    Josh Bender - 300746563
    Last updated - 10/03/2016
    Last Modified By - Josh Bender
*/

module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME : number = 1;
        public static WATER : number = 2;
        public static LIGHT : number = 3;
        public static BOAT : number = 4;
        public static PATH : number = 5;
        public static BOAT_FAST : number = 6;
        public static BOAT_SLOW : number = 7;
        public static PATH_FAST : number = 8;
        public static PATH_SLOW : number = 9;
        public static CLIFF : number = 10;
        public static TUNNEL : number = 11;
        public static CLIFF_FAST : number = 12;
        public static CLIFF_SLOW : number = 13;
        public static TUNNEL_PUSH : number = 14;
        public static TUNNEL_BACK : number = 15;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = Screen.WIDTH / 2;
        public static CENTER_Y : number = Screen.HEIGHT / 2;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}