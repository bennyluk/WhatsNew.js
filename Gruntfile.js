var fs = require('fs');

module.exports = function(grunt) {
  var _header_ = fs.readFileSync('./src/_header_.js', 'utf8');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      options: {
        banner: _header_
      },
      build: {
        files: {
          'dist/whatsNew.min.js': 'src/**/*.js'
        }
      }
    },
    cssmin: {
     options: {
       banner: _header_
     },
     build: {
       files: {
         'dist/whatsNew.min.css': 'src/**/*.css'
       }
     }
    },
    watch: {
      files: ['src/**/*.css'],
      tasks: ['cssmin'],
      scripts: {
        files: 'src/**/*.js', tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
