const sass = require('node-sass');

module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    // Pass in options to plugins, references to files etc
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
        dest: 'build/styles.css'
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        files: [
          {
            src: 'css/sass/styles.scss',
            dest: 'css/styles.css'
          }
        ]
      }
    },

    uglify: {
      build: {
        files: [
          {
            src: 'build/scripts.js',
            dest: 'build/scripts.js'
          }
        ]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks

  /* grunt.registerTask('dummyTask', function () {
    console.log('I am dummy task');
  });

  grunt.registerTask('dummyTask2', function () {
    console.log('I am dummy task2');
  });

  grunt.registerTask('combineTasks', ['dummyTask', 'dummyTask2']); */

  //creating task to concat all js & css files
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
};
