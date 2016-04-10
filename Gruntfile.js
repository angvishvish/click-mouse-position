module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'app/bower_components/jquery/dist/jquery.min.js',
          'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/bower_components/ngstorage/ngStorage.js',
          'app/app.js',
          'app/click/click.js'
        ],
        dest: 'app/<%= pkg.name %>.add.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'app/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    less: {
      debug: {
        src: [
          'app/bower_components/html5-boilerplate/dist/css/normalize.css',
          'app/bower_components/html5-boilerplate/dist/css/main.css',
          'app/bower_components/bootstrap/dist/css/bootstrap.css',
          'app/app.less',
        ],
        dest: 'app/app.css'
      }
    },
    cssmin: {
      'app/app.css': [
        'app/app.css'
      ]
    },
    watch: {
      files: ['app/**.less'],
      tasks: ['less', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'cssmin']);
  grunt.registerTask('js', ['concat', 'uglify']);

};