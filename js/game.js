/**
 * User: Martin Fünning (Privat)
 * Date: 30.03.15
 * Time: 11:58
 */

var game = function() {
    // Initialize Crafty
    Crafty.init(
        800, 600,
        document.getElementById('game')
    );

    Crafty.canvas.init(); // Create a Canvas Element

    Crafty.scene("init" , this);
};

game.prototype = {};
game.prototype.scene = {};
game.prototype.options = {};
game.prototype.clearTemp = function() { this.tempElements = {}; };

$(document).ready(function() {
    new game();
});