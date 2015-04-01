/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 30.03.15
 * Time: 16:22
 */

// Set up a (ugly) loading screen
game.prototype.scene.loading = Crafty.scene("loading", function(game) {
    // Load our assets
    game.tempElements.loadingPercent = 0;
    // White background and some ugle text
    Crafty.background('#FFFFFF url('+game.options.preloadingAssetsObj.images.backgroundLoading+') no-repeat center center');
    game.tempElements.loadingElement = Crafty.e("2D, DOM, Text").attr({w: 640, h: 20, x: 0, y: 120})
        .text("Loading "+game.tempElements.loadingPercent+"%")
        .css({"text-align": "center"}).unselectable();

    Crafty.load(
        game.options.assetsObj,
        _.bind(function() {
            Crafty.sprite(64,64,this.options.assetsObj.images.heroSprite, {
                HeroStandRight:[0,0,1,2],
                HeroStandLeft:[0,2,1,2],
                HeroJumpRight:[0,2,1,2],
                HeroJumpLeft:[0,2,1,2]
            });

            Crafty.scene("main", this); // Play the main scene

        }, game),

        _.bind(function(e) { //progress
            this.text("Loading "+ e.percent+"%");
        }, game.tempElements.loadingElement)
    );


});