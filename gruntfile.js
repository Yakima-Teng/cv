module.exports = function (grunt) {
  var SOURCE = './src/'
  var WWW = 'dist/'
  var DEST = './' + WWW + 'resume/'
  var port = 3000
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '@*/grunt-*']
  })
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', SOURCE + 'scripts/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        // suppresses warnings about missing semicolons
        asi: true,
        // tell JSHint that your code uses ECMAScript 6 specific syntax
        esversion: 6
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
          // 对象的key为变量时，需要在外面包上中括号，否则会报错
          [DEST + 'js/app.js']: '' + SOURCE + 'scripts/app.js'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ''
      },
      dist: {
        // the files to concatenate
        src: [SOURCE + 'libs/jquery-1.12.2.js', SOURCE + 'libs/vue.js', SOURCE + 'libs/vue-resource.js', DEST + 'js/app.js'],
        // the location of the resulting JS file
        dest: DEST + 'js/app.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          [DEST + 'js/app.min.js']: [DEST + 'js/app.js']
        }
      }
    },
    less: {
      development: {
        options: {
          paths: [SOURCE + 'styles/app.less'],
          plugins: [
            new (require('less-plugin-autoprefix'))({
              browsers: ['last 2 versions']
            }),
            // compress css files
            new (require('less-plugin-clean-css'))({
              compatibility: 'ie8'
            })
          ]
          // modifyVars: {
          //   imgPath: '"http://mycdn.com/path/to/images"',
          //   bgColor: 'red'
          // }
        },
        files: {
          [DEST + 'css/app.min.css']: SOURCE + 'styles/app.less'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [SOURCE + 'index.html'],
            dest: DEST,
            flatten: true,
            filter: 'isFile'
          }
        ]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          // for png optimization
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          // src matches are relative to this path
          cwd: SOURCE + 'assets',
          // 这里添加.ico文件不是为了压缩，仅仅是为了顺便把源目录下的.ico文件也复制到发布目录中
          src: ['**/*.{png,jpg,jpeg,gif,ico}'],
          dest: DEST + 'img/'
        }]
      }
    },
    connect: {
      options: {
        port: port,
        hostname: '*',
        livereload: 35729
      },
      server: {
        options: {
          open: true,
          base: [WWW]
        }
      }
    },
    watch: {
      html: {
        files: [SOURCE + 'index.html'],
        tasks: ['html']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['js']
      },
      less: {
        files: [SOURCE + 'styles/**/*.less'],
        tasks: ['css']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          DEST + '*.html',
          DEST + 'css/**/*.css',
          DEST + 'js/**/*.js',
          DEST + 'img/**/**.{png,jpg,jpeg,gif}'
        ]
      }
    }
  })

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('js', ['jshint', 'babel', 'concat', 'uglify'])

  grunt.registerTask('css', ['less'])

  grunt.registerTask('html', ['copy:main'])

  grunt.registerTask('image', ['imagemin:dynamic'])

  grunt.registerTask('dev', ['html', 'css', 'js', 'image', 'connect:server', 'watch'])

}