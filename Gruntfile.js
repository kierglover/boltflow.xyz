module.exports = function(grunt) {

    const gifsicle = require('imagemin-gifsicle');
    const jpegtran = require('imagemin-jpegtran');
    const optipng = require('imagemin-optipng');
    const svgo = require('imagemin-svgo');

    grunt.initConfig({

//SIMPLE PHP SERVER //
serve: {
    options: {
        port: 8000,
        open: {
            target: 'http://localhost:8000/index.html'
          }
    }
},
     // COMBINES JS //
     concat: {
          js: {
               src: ['**/*.js'],
               dest: 'js/scripts.js',
               },

          // COMBINES CSS FILES //
          css: {
               src: ['**/*.css'],
               dest: 'css/main.css',
               },
     },

     //UGLIFY JS//
     uglify: {
          my_target: {
               files: {
                    'dist/js/scripts.min.js': ['assets/js/**/*.js']
               }
          }
     },

        // SENDS MAIN CSS TO BUILD CSS AND MINIFIES, REMOVES UNUSED CLASSES ETC //
        cssnano: {
            dist: {
                files: {
                    'dist/css/main.min.css': 'assets/css/**/*.css'
                }
            }

        },

        //ImageMin
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [gifsicle(), jpegtran(), optipng(), svgo()] // Example plugin usage
                },
                files: {
                    'dist/img.png': 'src/img.png',
                    'dist/img.jpg': 'src/img.jpg',
                    'dist/img.gif': 'src/img.gif'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },

        watch: {
            js: {
                files: ['js/**/*.js', 'css/**/*.css'],
                tasks: ['concat:js', 'concat:css', 'uglify', 'cssnano'],
            },
        },

});

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('boltflow', ['concat', 'uglify', 'cssnano']);
    grunt.registerTask('default', ['watch']);
};