module.exports = function(grunt) {

    grunt.initConfig({

//SIMPLE PHP SERVER //
     php: {
          dist: {
            options: {
                port: 5000,
                base:".",
                open:true,
                keepalive:true,
            }
        }
   },
     // COMBINES JS //
     concat: {
          js: {
               src: ['js/webflow.js'],
               dest: 'assets/js/scripts.js',
               },

          // COMBINES CSS FILES //
          css: {
               src: ['css/main.css', 'css/normalize.css', 'css/webflow.css'],
               dest: 'assets/css/main.css',
               },
     },

     //UGLIFY JS//
     uglify: {
          my_target: {
               files: {
                    'build/js/scripts.min.js': ['assets/js/scripts.js']
               }
          }
     },

        // SENDS MAIN CSS TO BUILD CSS AND MINIFIES, REMOVES UNUSED CLASSES ETC //
        cssnano: {
            dist: {
                files: {
                    'build/css/main.min.css': 'assets/css/main.css'
                }
            }

        },

        watch: {
            js: {
                files: ['js/**/*.js', 'css/**/*.css'],
                tasks: ['concat:js', 'concat:css', 'uglify', 'cssnano'],
            },
        },

});
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};