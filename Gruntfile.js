module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'css/style.scss'
        }
      }
    },

    watch: {
      files: ['css/**/*.scss'],
      tasks: ['sass']
    }

  });

  grunt.registerTask('default', ['watch']);

};
