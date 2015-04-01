/**
 * User: Martin Fünning (Privat)
 * Date: 31.03.15
 * Time: 14:50
 */
game.prototype.scene.main = Crafty.scene("main", function(game) {
    Crafty.background('#FFFFFF url('+game.options.assetsObj.images.backgroundMain+') no-repeat center center');
    window.setTimeout(_.bind(function(game) {
        Crafty.scene("stage", {game: game, stage: game.stages.teststage});
    }, this, game), 500);



});