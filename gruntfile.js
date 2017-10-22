'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      all: {
        options: { livereload: true },
        files: ['*.html', 'css/*.css', 'bin/*.js'],
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    },
    lesslint: {
       src: ['less/*.less']
    },
    less: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'css/main.css': 'less/main.less'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'bin/app.min.js': ['js/app.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);
};
