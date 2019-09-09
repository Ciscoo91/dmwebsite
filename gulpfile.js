const { src, dest, parrallel } = require('gulp');
const ejs = require('gulp-ejs');
const del = require('del');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const configDir = () => {
    return src('config/*.js')
        .pipe(dest("dist/config/"))
}

const modelDir = () => {
    return src('model/*.js')
        .pipe()
}

const ejsDir = () => {
    return src('views/**/*.ejs')
        .pipe(dest("dist/views"))
}

const cleanDir = () => {
    return del('dist');
}

exports.ejsDir = ejsDir;
exports.clean = cleanDir;