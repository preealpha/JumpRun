/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 30.03.15
 * Time: 16:22
 */

// Set up a (ugly) loading screen
var loadingPercent = 0;
var loadingElement = false;
game.prototype.scene.loading = Crafty.scene("loading", function(game) {
    // Load our assets
    Crafty.load(
        game.options.assetsObj,
        function() {
            // Put in a fake timeout so we can see this in action
            // DONT do this in a real game please
            setTimeout(function() {
                Crafty.scene("main"); // Play the main scene
            }, 2000);
        },

        function(e) { //progress
            loadingPercent = e.percent;
            console.log(loadingElement.text(function () { return "Loading "+loadingPercent+"%" }));
        }
    );

    // White background and some ugle text
    Crafty.background("#FFF");
    loadingElement = Crafty.e("2D, DOM, Text").attr({w: 640, h: 20, x: 0, y: 120})
        .text(function () { return "Loading "+loadingPercent+"%" })
        .css({"text-align": "center"}).unselectable();
});