const { src, dest, watch, parallel, series, lastRun } = require('gulp');
const del = require('del');
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

const cleanCss = () => {
    return del('dist/public/css')
}

const packages = () => {
    return src(['package.json', 'package-lock.json'])
        .pipe(dest('dist/'))
}

const css = () => {
    return src('dev/public/css/*.scss')
        .pipe(sass())
        .pipe(dest('dist/public/css/'))
}

const watcher = () => {
    watch('dev/public/css/*.scss', css)
}


exports.clean = cleanDir;
exports.ejsDir = ejsDir;
exports.packages = packages;
exports.model = modelDir;
exports.config = configDir;
exports.css = css;
exports.cleanCss = cleanCss;
exports.staticJs = staticJs;
exports.staticImg = staticImg;

exports.default = parallel(ejsDir, modelDir, configDir, staticImg, staticJs, css)
exports.watcher = () => {
    watch('dev/public/css/*.scss', css)
}


