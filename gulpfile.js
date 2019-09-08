const { src, dest, parrallel } = require('gulp');
const ejs = require('gulp-ejs');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const configDir = () => {
    return src('config/*.js')
        .pipe(dest("dist/config/"))
}

const ejsDir = () => {
    return src('views/**/*.ejs')
}


exports.default = reorganiseDirectory;