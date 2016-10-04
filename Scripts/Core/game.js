/// <reference path = "_reference.ts" />
/*
    Josh Bender - 300746563
    Last updated - 10/03/2016
    Last Modified By - Josh Bender
*/
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
var gameOverScene;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Choice", src: "../../Assets/images/choice-btn.png" },
    { id: "Menu", src: "../../Assets/images/menu-img.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        case config.Scene.WATER:
            stage.removeAllChildren();
            currentScene = new scenes.Water();
            console.log("Starting WATER scene");
            break;
        case config.Scene.LIGHT:
            stage.removeAllChildren();
            currentScene = new scenes.Light();
            console.log("Starting LIGHT scene");
            break;
        case config.Scene.BOAT:
            stage.removeAllChildren();
            currentScene = new scenes.Boat();
            console.log("Starting BOAT scene");
            break;
        case config.Scene.PATH:
            stage.removeAllChildren();
            currentScene = new scenes.Path();
            console.log("Starting PATH scene");
            break;
        case config.Scene.BOAT_FAST:
            stage.removeAllChildren();
            currentScene = new scenes.BoatFast();
            console.log("Starting BOAT_FAST scene");
            break;
        case config.Scene.BOAT_SLOW:
            stage.removeAllChildren();
            currentScene = new scenes.BoatSlow();
            console.log("Starting BOAT_SLOW scene");
            break;
        case config.Scene.PATH_FAST:
            stage.removeAllChildren();
            currentScene = new scenes.PathFast();
            console.log("Starting PATH_FAST scene");
            break;
        case config.Scene.PATH_SLOW:
            stage.removeAllChildren();
            currentScene = new scenes.PathSlow();
            console.log("Starting PATH_SLOW scene");
            break;
        case config.Scene.CLIFF:
            stage.removeAllChildren();
            currentScene = new scenes.Cliff();
            console.log("Starting CLIFF scene");
            break;
        case config.Scene.TUNNEL:
            stage.removeAllChildren();
            currentScene = new scenes.Tunnel();
            console.log("Starting TUNNEL scene");
            break;
        case config.Scene.TUNNEL_BACK:
            stage.removeAllChildren();
            currentScene = new scenes.TunnelBack();
            console.log("Starting TUNNEL_BACK scene");
            break;
        case config.Scene.TUNNEL_PUSH:
            stage.removeAllChildren();
            currentScene = new scenes.TunnelPush();
            console.log("Starting TUNNEL_PUSH scene");
            break;
        case config.Scene.CLIFF_FAST:
            stage.removeAllChildren();
            currentScene = new scenes.CliffFast();
            console.log("Starting CLIFF_FAST scene");
            break;
        case config.Scene.CLIFF_SLOW:
            stage.removeAllChildren();
            currentScene = new scenes.CliffSlow();
            console.log("Starting CLIFF_SLOW scene");
            break;
    }
}
/*

<STORY PATHS>

"*****START****************************************************************************************************"

Floating in the void, you hear muffled noises off in the distance. The pain in your head is excrutiating
and you feel groggy as if you were waking up from a hard night of partying. Slowly you open your eyes.
Taking the back of your sleeve, you wipe away some crust and look around. It is nearly impossible to see
anything. Taking in your surroundings you hear the sound of water off in the distance to your left and
you see a faint light illuminating the ground to your right. It seems you are stuck in some sort of cave
and you will need to find your way back to the surface.

1. Follow the sound of the water
2. Head off in the direction of the light

"*****START****************************************************************************************************"

"*****WATER****************************************************************************************************"

You decide to head off towards the water. You are not sure where you are but the movement of the water
encourages you and you think, 'If there is a way out of here, that is it.' As the sound gets louder you
approach an underground beach of sorts. There looks to be an old boat with an oar that is partially damaged
and a narrow path leading around the edge of the river.

1. Take the boat accross the river
2. Walk the path around the edge of the river

"*****WATER****************************************************************************************************"

"*****BOAT****************************************************************************************************"

You approach the boat. You notice that the oar has a chunk missing from the end of it but that it still
looks to be functional. Slowly wading in you push the boat accross the water and hop in. Although the paddle
is damaged, you manage to build up some speed and begin your journey accross the river. A little more than
halfway accross you notice a large ripple in the water and it seems to be moving in your direction.

1. Paddle like hell for the other side.
2. Stop paddling and let the boat glide silently.

"*****BOAT****************************************************************************************************"

"*****PATH****************************************************************************************************"

Unaware of what may lay under the water and not willing to find out, you decide that the best option is the
narrow path around the water. As you approach the narrow edge, you place your hand on the wall for a little
extra grip and begin to slowly make your way accross the path one foot at a time. About halfway accross the
path, your heart races as you trip on a small rock. The rock makes a small splash and you manage to catch
your balance before plummeting down into the dark waters. All of a sudden the water ripples and you see
something approaching the path.

1. Run like the wind for the other side.
2. Continue along the path carefully.

"*****PATH****************************************************************************************************"

"*****BOAT-FASTER****************************************************************************************************"

You decide that although you have no idea what you saw, that it is probably something that doesn't need seeing. You
furiosuly paddle the boat, tearing your paddle through the water with all abandon. Looking behind you it seems that
you have lost whatever it was and have covered a lot of distance. Craning your head back around to look for the
shoreline you find yourself face to face with giant teeth dripping a slimy green substance and quickly closing around
you and your boat. Through the crunch of wood and the pain of being impaled by giant slime covered teeth, you somehow
think that you could have made better choices along the way.

YOU LOSE!

"*****BOAT-FASTER****************************************************************************************************"

"*****BOAT-SLOWER****************************************************************************************************"

You are not quite sure what you saw but you don't want to piss it off or bring any attention to yourself. You pick up
your paddle and quietly place it in your boat until you figure out what to do. While you are sitting there pondering,
jet black tentacles slowly make their way around the edge of your boat. In a split second, your boat is pulled deep
into the water and into the jaws of a massive beast. Through the garggled sounds of your last dying gasps for air you
somehow think that you could have made better choices along the way.

YOU LOSE!

"*****BOAT-SLOWER****************************************************************************************************"

"*****PATH-FASTER****************************************************************************************************"

Not sure what the hell that thing was you start running furiously for the other side. Out of nowhere you hear a
terrifying howl that booms accross the walls of the caves. Unable to help your curious self, you turn your head
around to find the source of the awful sound. As you turn your head you see a glimpse of a jet black tentacle
which is quickly ripped from your vision as you trip over your own feet and smash your head on the ground finding
only darkness. Somehow think that you could have made better choices along the way.

YOU LOSE!

"*****PATH-FASTER****************************************************************************************************"

"*****PATH-SLOWER****************************************************************************************************"

Keeping a level head, you continue on your path carefully while watching the approaching ripples. As the ripples
get closer you are able to see through the water with some difficulty. It looks as though the beast causing the
ripples is monstorous, it's black form approaching quicker. All of a sudden the entire cave shakes as the beast
crashes into the wall just below you. The path begins to fall away under your feet and you begin your descent
into the maw of the beast. Somehow think that you could have made better choices along the way.

YOU LOSE!

"*****PATH-SLOWER****************************************************************************************************"

"*****LIGHT****************************************************************************************************"

You decide it best to investigate the light. You have high hopes that the light will lead you back to the
surface. As you approach the source of the light you quickly discern that it is probably coming through a
crack, high up and deeper into the cave. In front of you lies a rocky wall that looks as if it can be climbed
and a narrow tunnel that you may be able to squeeze through. As you move closer to the tunnel you feel warm air
moving through.

1. Climb the wall and continue exploring above.
2. Crawl through the narrow tunnel to the other side.

"*****LIGHT****************************************************************************************************"

"*****CLIFF****************************************************************************************************"

You decide it best to go up. The light appeared to be coming from that direction and it makes sense that an
exit would most likely be that way. The rocks provide good footholds and you are able to scale the wall without
any problems. After the climb, you continue on your way towards the source of the light. After a good five
minutes of walking you hear a low, throaty rumble. Turning your head to the right you see a large yellowish eye
straining to look in your direction through a crack in the rocky wall.

1. Run towards the source of the light and try to escape.
2. Back against the wall where the cave is darkest and try to avoid it's view.

"*****CLIFF****************************************************************************************************"

"*****TUNNEL****************************************************************************************************"

You decide to crawl through the narrow tunnel. You think that the warm air is a good sign and might lead you
to the outside. Geting on your hands and knees you start the crawl through. Although the tunnel is tight you
are able to navigate it and move through slowly. Somewhere around the middle of the tunnel you hear a roar off
in the distance and the tunnel starts to shake. A large chunk of rock slides out from the ceiling of the tunnel
just above your lower back and pins you down.

1. Try to free yourself and move back the way you came.
2. Force your way through to the end of the tunnel.

"*****TUNNEL****************************************************************************************************"

"*****CLIFF-RUN****************************************************************************************************"

Not quite sure what you saw, you run towards the light. You have no idea what that was but you know you need to
get out of here fast. All of a sudden a roaring crash penetrates the air as a winged, scaly beast breaks through
the wall behind you. Knowing your time is limited you sprint with everything you have for the light. You can hear
the beast getting closer with each step and then the light gets brighter, way brighter. The whole cave is alight
with an orange glow and then an unworldy heat consumes you as the dragon's breath races through the hallway consuming
everything in it's wake. Somehow think that you could have made better choices along the way.

YOU LOSE!

"*****CLIFF-RUN****************************************************************************************************"

"*****CLIFF-SHADOW****************************************************************************************************"

Scared of whatever is attached to that eye, you press your back against the wall, as you move into the shadows.
Standing there, with that eye staring in your direction, you pray to the Gods of every religion you've ever
heard of and hope that you remain unseen. You hear a thud, and then another and then the whole cave is shaking.
All of a sudden the beast breaks through and it looks pissed. It spreads its scaly wings and starts shooting its
fiery in random directions. The stones glow white hot where the fire has touched. Out of nowhere the beast roars
and smashes through the ceiling of the cave, leaving a giant hole in it's wake. Still in shock, you slowly make your
way to the massive hole and climb through to the surface.

CONGRATULATIONS YOU WIN!

"*****CLIFF-SHADOW****************************************************************************************************"

"*****TUNNEL-BACK****************************************************************************************************"

You try to unpin yourself from the chunk of rock holding you down and finally with great effort you pull free. As the
rock softly thuds against the ground next to you the whole tunnel starts to shake again. In a matter of seconds you
are buried in the rubble. Somehow think that you could have made better choices along the way.

YOU LOSE!

"*****TUNNEL-BACK****************************************************************************************************"

"*****TUNNEL-FORCE****************************************************************************************************"

With great effort you manage to pull free from the rock pinning you down. As you do the cave shakes and the way that
you came from is quickly caved-in. With only one direction to move in you make your way down the rest of the tunnel in
a slow, ardious crawl. Finally reaching the end of the tunnel, you find yourself in a pitch black room with rocky walls
on every side. You are trapped with no way out and you somehow think that you could have made better choices along the
way.

YOU LOSE!

"*****TUNNEL-FORCE****************************************************************************************************"

*/ 
//# sourceMappingURL=game.js.map