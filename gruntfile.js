/**
 * User: Martin Fünning (Privat)
 * Date: 30.03.15
 * Time: 11:58
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner:
                    '/**' + "\n" +
                        ' * <%= pkg.name %>' + "\n" +
                        ' * ================================================================================================' + "\n" +
                        ' * <%= pkg.description %>' + "\n" +
                        ' * ' + "\n" +
                        ' * Author: <%= pkg.author.name %> <<%= pkg.author.email %>>' + "\n" +
                        ' * Version: <%= pkg.version %> ' + "\n" +
                        ' * Build Date: <%= grunt.template.today("yyyy-mm-dd") %>' + "\n" +
                        ' */' + "\n"
            },
            build: {
                src: [
                    'js/vendor/underscore.js',
                    'js/vendor/jquery-2.1.3.js',
                    'js/vendor/crafty.js',
                    'js/vendor/create_mocks_module.js',
                    'js/vendor/tiledmapbuilder.js',
                    'js/game.js',
                    'js/settings.js',
                    'js/scene.init.js',
                    'js/scene.loading.js',
                    'js/scene.main.js',
                    'js/scene.stage.js'
                ],
                dest: 'build/jumpRun/js/jumpRun.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css'],
                    dest: 'build/jumpRun/css',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'assets/*',
                            'assets/Background/*',
                            'assets/Blocks/*',
                            'assets/Hero/*',
                            'assets/Objects/*'
                        ],
                        dest: 'build/jumpRun/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: [
                            'stages/*'
                        ],
                        dest: 'build/jumpRun/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);

};