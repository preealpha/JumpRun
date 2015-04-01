/**
 * User: Martin Fünning (Privat)
 * Date: 31.03.15
 * Time: 14:50
 */
game.prototype.scene.main = Crafty.scene("stage", function(data) {
    var game = data.game;
    Crafty.background('#FFFFFF url('+game.options.assetsObj.images.backgroundGame+') no-repeat center center');
    $.ajax(data.stage, { complete: function(data) {
        Crafty.e("2D, DOM, TiledMapBuilder").setMapDataSource(data.responseJSON).createWorld( function( tiledmap ){

            //Obstacles
            for (var obstacle = 0; obstacle < tiledmap.getEntitiesInLayer('Level').length; obstacle++){
                tiledmap.getEntitiesInLayer('Level')[obstacle]
                    .addComponent("Collision")
                    .collision();
            }

            Crafty.c("Camera",{
                init: function() {  },
                camera: function(obj) {
                    this.set(obj);
                    var that = this;
                    obj.bind("Moved",function(location) { that.set(location); });
                },
                set: function(obj) {
                    Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;
                    Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;
                }
            });

            var player = Crafty.e("2D, DOM, Twoway, SpriteAnimation, HeroStandRight, Collision, Gravity")
                .attr({x: 150, y: 50, z: 10})
                .twoway(5, 20)
                .gravity('Level')
                .reel('HeroRightRunning',200, 2, 0, 2)
                .reel('HeroLeftRunning',200, 2, 2, 2)
                .bind("NewDirection", function (direction) {
                    if (direction.x > 0 && !player.jump) {
                        if (!player.isPlaying("HeroRightRunning")) player.animate("HeroRightRunning", -1);
                        player.direction = 'right';
                    }
                    if (direction.x < 0 && !player.jump) {
                        if (!player.isPlaying("HeroLeftRunning")) player.animate("HeroLeftRunning", -1);
                        player.direction = 'left';
                    }
                    if(!direction.x && !direction.y) {
                        player.pauseAnimation().resetAnimation();
                        switch(player.direction) {
                            case 'right': default: player.sprite(0, 0, 1, 2); break;
                            case 'left': player.sprite(0, 2, 1, 2); break;
                        }

                    }
                })
                .bind("EnterFrame", function(e) {
                    if (!player.y_before) {
                        player.y_before = player.y
                    } else {
                        if (player.y < player.y_before) {
                            player.jump = true;
                            player.pauseAnimation().resetAnimation();
                            switch(player.direction) {
                                case 'right': default: player.sprite(1, 0, 1, 2); break;
                                case 'left': player.sprite(1, 2, 1, 2); break;
                            }
                        } else {
                            player.jump = false;
                            if ((!player.isPlaying("HeroRightRunning")) && (!player.isPlaying("HeroLeftRunning"))) {
                                switch(player.direction) {
                                    case 'right': default: player.sprite(0, 0, 1, 2); break;
                                    case 'left': player.sprite(0, 2, 1, 2); break;
                                }
                            }
                        }
                        player.y_before = player.y
                    }

                })
                .gravityConst(1.7);

            var camera = Crafty.e("Camera").camera(player);
        });
    }})
});