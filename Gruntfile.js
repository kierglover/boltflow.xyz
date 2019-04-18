module.exports = function(grunt) {

    grunt.initConfig({

//SIMPLE PHP SERVER //
serve: {
    options: {
        port: 9000,
    }
},
     // COMBINES JS //
     concat: {
          js: {
               src: ['js/**/*.js'],
               dest: 'assets/js/scripts.js',
               },

          // COMBINES CSS FILES //
          css: {
               src: ['css/**/*.css'],
               dest: 'assets/css/main.css',
               },
     },

     //UGLIFY JS//
     uglify: {
          my_target: {
               files: {
                    'build/js/scripts.min.js': ['assets/js/**/*.js']
               }
          }
     },

        // SENDS MAIN CSS TO BUILD CSS AND MINIFIES, REMOVES UNUSED CLASSES ETC //
        cssnano: {
            dist: {
                files: {
                    'build/css/main.min.css': 'assets/css/**/*.css'
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

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('boltflow', ['serve', 'concat', 'uglify', 'cssnano']);
    grunt.registerTask('default', ['watch']);
};