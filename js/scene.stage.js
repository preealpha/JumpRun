/**
 * User: Martin Fünning (Privat)
 * Date: 31.03.15
 * Time: 14:50
 */
game.prototype.scene.main = Crafty.scene("stage", function(data) {
    var game = data.game;
    Crafty.background('#FFFFFF url('+game.options.assetsObj.images.backgroundGame+') no-repeat center center');
    $.ajax(data.stage, { complete: function(data) {
        console.log(data.responseJSON);
        Crafty.e("2D, DOM, TiledMapBuilder").setMapDataSource(data.responseJSON).createWorld( function( tiledmap ){

        });
    }})
});