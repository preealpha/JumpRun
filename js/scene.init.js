/**
 * User: Martin Fünning (Privat)
 * Date: 31.03.15
 * Time: 14:18
 */

game.prototype.scene.init = Crafty.scene("init", function(game) {
    // Load our assets
    game.tempElements.loadingPercent = 0;

    Crafty.load(
        game.options.preloadingAssetsObj,
        _.bind(function() {
            Crafty.scene("loading", game);
            this.clearTemp();
        }, game)
    );

    // White background and some ugle text
    Crafty.background("#000");
});