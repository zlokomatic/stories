module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              sourceMaps: 'inline'
            }]
          ]
        },
        files: {
          "./dist/js/index.js": ["./src/index.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./src/**/*.js"],
        tasks: ['browserify']
      },
      html: {
        files: ["./src/**/*.html"],
        tasks: ['copy']
      },
      sass: {
        files: ["./src/**/*.scss"],
        tasks: ['sass']
      }
    },
    browserSync: {
      bsFiles: {
        src : 'dist/**'
      },
      options: {
        server: {
          baseDir: "./dist"
        },
        watchTask: true
      }
    },
    copy: {
      index: {
        src: './src/index.html',
        dest: './dist/index.html'
      },
      bootstrapjs: {
        src: './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        dest: './dist/js/bootstrap.min.js'
      }
    },
    sass: {
      options: {
        sourceMap: true,
        includePaths: ['./src/styles/', './node_modules/bootstrap-sass/assets/stylesheets/']
      },
      dist: {
        files: {
          './dist/css/main.css': './src/styles/index.scss'
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['copy', 'sass', 'browserify', 'browserSync', 'watch']);

};
