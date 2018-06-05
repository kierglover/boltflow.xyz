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
     // CONCAT JS //
     concat: {
          js: {
               src: ['js/modernizr.js', 'js/webflow.js'],
               dest: 'build/js/scripts.js',
               },

          // CONCATS MAIN CSS AND BOOTSTRAP MIN CSS //
          css: {
               src: ['css/main.css', 'css/normalize.css', 'css/webflow.css'],
               dest: 'build/css/main.css',
               },
     },

     //UGLIFY JS//
     uglify: {
          my_target: {
               files: {
                    'build/js/scripts.min.js': ['build/js/scripts.js']
               }
          }
     },

        // PIPES MAIN CSS TO DIST AND MINIFIES //
        cssmin: {
            dist: {
                files: [
                    {src: 'build/css/main.css',
                    dest: 'build/css/main.min.css'}
                ]
            }

        },

        watch: {
            js: {
                files: ['js/**/*.js', 'css/**/*.css'],
                tasks: ['concat:js', 'concat:css', 'uglify', 'cssmin'],
            },
        },

});
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
