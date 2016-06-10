const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const gulpWebpack = require('gulp-webpack');
const del = require('del');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

// Config file
const webpackConfig = require('./webpack.config');

gulp.task('webpack-dev-server', () =>
    new WebpackDevServer(webpack(webpackConfig.dev), {
      publicPath: webpackConfig.dev.output.publicPath,
      hot: true,
      historyApiFallback: true
    }).listen(webpackConfig.dev.port, '0.0.0.0')
);

gulp.task('webpack:build', () =>
    gulp.src(webpackConfig.PATHS.add2paper)
        .pipe(gulpWebpack(webpackConfig.prod))
        .pipe(babel({
          babelrc: false,
          plugins: [
            "transform-es3-property-literals",
            "transform-es3-member-expression-literals"
          ]
        }))
        .pipe(gulp.dest('./static/js/'))
);

gulp.task('api-server', () =>
  nodemon({
    script: './api-server/app.js'
  })
);

// Development server
gulp.task('default', ['webpack-dev-server', 'api-server']);

// Production build
gulp.task('build', ['webpack:build']);
