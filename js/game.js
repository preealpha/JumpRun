/**
 * User: Martin Fünning (Privat)
 * Date: 30.03.15
 * Time: 11:58
 */

var game = function() {
    // Initialize Crafty
    Crafty.init(
        640, 480,
        document.getElementById('game')
    );

    Crafty.canvas.init(); // Create a Canvas Element

    Crafty.scene("loading" , this);
};
game.prototype.scene = {};
game.prototype.options = {};

$(document).ready(function() {
    new game();
});