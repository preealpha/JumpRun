/**
 * User: Martin Fünning (Privat)
 * Date: 30.03.15
 * Time: 16:28
 */

game.prototype.tempElements = {};

// Werden beim Init geladen
game.prototype.options.preloadingAssetsObj = {
    images: {
        backgroundLoading: "assets/Background/loading.png"
    }
};

// Werden beim Loading geladen
game.prototype.options.assetsObj = {
    /*"audio": {
        "beep": ["beep.wav", "beep.mp3", "beep.ogg"],
        "boop": "boop.wav",
        "slash": "slash.wav"
    },*/
    /*"sprites": {
     "animals.png": {
     "tile": 50,
     "tileh": 40,
     "map": { "ladybug": [0,0], "lazycat": [0,1], "ferociousdog": [0,2] }
     "paddingX": 5,
     "paddingY": 5,
     "paddingAroundBorder": 10
     },
     "vehicles.png": {
     "tile": 150,
     "tileh": 75,
     "map": { "car": [0,0], "truck": [0,1] }
     }
     },*/
    "images": {
        blockBrick: "assets/Blocks/block_brick.png",
        blockGround: "assets/Blocks/block_ground.png",
        blockQuestion: "assets/Blocks/block_question.png",
        blockStone: "assets/Blocks/block_stone.png",
        koalaIdle: "assets/Hero/koala_idle.png",
        koalaJump: "assets/Hero/koala_jump.png",
        koalaWalk01: "assets/Hero/koala_walk01.png",
        koalaWalk02: "assets/Hero/koala_walk02.png",
        objectAnthill: "assets/Objects/object_anthill.png",
        objectCloud1: "assets/Objects/object_cloud1.png",
        objectCloud2: "assets/Objects/object_cloud2.png",
        objectCoin: "assets/Objects/object_coin.png",
        objectDoorClosed: "assets/Objects/object_door_closed.png",
        objectDoorOpen: "assets/Objects/object_door_open.png",
        objectMountain1: "assets/Objects/object_mountain1.png",
        objectMountain2: "assets/Objects/object_mountain2.png",
        objectSpikes: "assets/Objects/object_spikes.png",
        objectTree: "assets/Objects/object_tree.png",
        backgroundMain: "assets/Background/main.png"
    }

};