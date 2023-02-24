import svg_prite from "gulp-svg-sprite";

export const svgSprite = () => {
    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ //виведення сповіщень про помилку у Windows
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svg_prite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true,
                }
            }
        }))
        .pipe(app.gulp.dest(`./src/img/`))
}
/*
export const svgSpriteDist = () => {
    return app.gulp.src(app.path.src.svg, {})
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}

export const svgSpriteDist = () => {
    return app.gulp.src(app.path.src.icons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ //виведення сповіщень про помилку у Windows
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}
*/