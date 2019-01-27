const config = (() => {
  try {
    return require('./config')
  } catch (e) {
    if (e.message.indexOf('Cannot find module \'./config\'') !== -1) {
      // tell developer the optional configuration file for deployment
      console.log("\x1b[33m%s\x1b[0m" ,"If you want to deploy your work to an sftp-available server, you can rename `config-example.json` and change the content to suit yours.")
    }
    return {}
  }
})()

module.exports = function (grunt) {
  var SOURCE = './src/'
  var WWW = 'dist/'
  var projectName = 'cv'
  var DEST = './' + WWW + projectName + '/'
  var port = 3000
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '@*/grunt-*']
  })
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [WWW],
    scp: {
      options: {
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        readyTimeout: 600000
      },
      your_target: {
        files: [
          {
            cwd: 'dist',
            // all files under dist folder will be deployed to the server
            src: '**/*',
            filter: 'isFile',
            // path on the server
            dest: config.dest
          }
        ]
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', SOURCE + 'scripts/*.js', SOURCE + 'scripts/data/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          $: true,
          console: true,
          Vue: true,
          window: true
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
          [SOURCE + 'scripts/temp/concat.babel.js']: '' + SOURCE + 'scripts/temp/concat.js'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ''
      },
      scripts: {
        src: [SOURCE + 'scripts/data/*.js', SOURCE + 'scripts/app.js'],
        dest: SOURCE + 'scripts/temp/concat.js'
      },
      dist: {
        // the files to concatenate
        src: [SOURCE + 'libs/vue.js', SOURCE + 'scripts/temp/concat.babel.js'],
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
              browsers: ['last 20 versions']
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
    htmlrefs: {
      dist: {
        expand: true,
        src: [SOURCE + '**/*.html'],
        dest: DEST,
        options: {
          buildVersion: (function () {
            function toDouble (n) {
              return n < 10 ? '0' + n : '' + n
            }
            const d = new Date()
            return '' + d.getFullYear() + toDouble(d.getMonth() + 1) + toDouble(d.getDate()) +
              toDouble(d.getHours()) + toDouble(d.getMinutes()) + toDouble(d.getSeconds())
          })()
        },
        flatten: true,
        filter: 'isFile'
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
      },
      img: {
        files: [
          {
            expand: true,
            src: [SOURCE + 'assets/*.{png,jpg,jpeg,gif,ico}'],
            dest: DEST + 'img/',
            flatten: true,
            filter: 'isFile'
          }
        ]
      },
      cv: {
        files: [
          {
            expand: true,
            src: [SOURCE + '../*.pdf'],
            dest: DEST,
            flatten: true,
            filter: 'isFile'
          }
        ]
      }
    },
    // imagemin: {
    //   dynamic: {
    //     options: {
    //       // for png optimization
    //       optimizationLevel: 7
    //     },
    //     files: [{
    //       expand: true,
    //       // src matches are relative to this path
    //       cwd: SOURCE + 'assets',
    //       // 这里添加.ico文件不是为了压缩，仅仅是为了顺便把源目录下的.ico文件也复制到发布目录中
    //       src: ['**/*.{png,jpg,jpeg,gif,ico}'],
    //       dest: DEST + 'img/'
    //     }]
    //   }
    // },
    connect: {
      options: {
        port: port,
        hostname: '*',
        livereload: 35729
      },
      server: {
        options: {
          open: 'http://localhost:' + port + '/' + projectName,
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
          DEST + 'js/**/*.js'
          // DEST + 'img/**/**.{png,jpg,jpeg,gif}'
        ]
      }
    }
  })

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('js', ['jshint', 'concat:scripts', 'babel', 'concat:dist', 'uglify'])

  grunt.registerTask('css', ['less'])

  grunt.registerTask('html', ['htmlrefs:dist'])

  grunt.registerTask('cv', ['copy:cv'])

  // grunt.registerTask('image', ['imagemin:dynamic'])
  grunt.registerTask('image', ['copy:img'])

  grunt.registerTask('dev', ['clean', 'html', 'cv', 'css', 'js', 'image', 'connect:server', 'watch'])

  grunt.registerTask('deploy', ['scp'])

}
