path = require 'path'
gulp = require 'gulp'

module.exports = (paths, options = {}) ->
  ->
    gulp.src [
      path.join(paths.src.lib, 'electron', 'electronApp.js')
      path.join(paths.root, 'package.json')
    ]
      .pipe gulp.dest(paths.build.html)

