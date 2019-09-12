const { src, dest, watch, parallel, lastRun } = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const configDir = () => {
    return src('dev/config/*.js')
        .pipe(dest("dist/config/"))
}

const modelDir = () => {
    return src('dev/model/*.js')
        .pipe(dest('dist/model/'))
}

const staticImg = () => {
    return src('dev/public/images/*.{jpg,jpeg,svg,ico,png}')
        .pipe(dest('dist/public/images/'))
}

const staticJs = () => {
    return src('dev/public/js/*.js')
        .pipe(dest('dist/public/js/'))
}

const ejsDir = () => {
    return src('dev/views/**/*.ejs')
        .pipe(dest("dist/views"))
}

const cleanDir = () => {
    return del('dist');
}

const packages = () => {
    return src(['package.json', 'package-lock.json', 'dev/dev/server.js'])
        .pipe(dest('dist/'))
}

const css = () => {
    return src('dev/dev/public/css/*.scss')
        .pipe(sass())
        .pipe(dest('dist/public/css/'))
}

const watcher = () => {
    watch('dev/dev/public/css/*.scss', css)
}


exports.clean = cleanDir;
exports.ejsDir = ejsDir;
exports.packages = packages;
exports.model = modelDir;
exports.config = configDir;
exports.css = css;
exports.staticJs = staticJs;
exports.staticImg = staticImg;

exports.default = {
    default: parallel(ejsDir, packages, modelDir, configDir, staticImg, staticJs, css),
    watch: watcher
}

