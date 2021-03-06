const gulp = require('gulp');
const run = require('gulp-run');

gulp.task('data-layer-prepublish', function() {
    return run('echo "Running gooddata-data-layer prepublish..."\n' +
        '  npm run prepublish  --prefix ../gooddata-data-layer\n' +
        '  cp -r ../gooddata-data-layer/dist ../gdc-dashboards/node_modules/\\@gooddata/data-layer\n' +
        '  cp -r ../gooddata-data-layer/dist ../gdc-analytical-designer/node_modules/\\@gooddata/data-layer\n' +
        '  echo "gooddata-data-layer prepublished & copied!"').exec();
});

gulp.task('indigo-visualizations-prepublish', function() {
    return run('echo "Running gooddata-indigo-visualizations prepublish..."\n' +
        '  npm run prepublish  --prefix ../gooddata-indigo-visualizations\n' +
        '  cp -r ../gooddata-indigo-visualizations/lib ../gdc-dashboards/node_modules/\\@gooddata/indigo-visualizations\n' +
        '  cp -r ../gooddata-indigo-visualizations/lib ../gdc-analytical-designer/node_modules/\\@gooddata/indigo-visualizations\n' +
        '  echo "gooddata-indigo-visualizations prepublished & copied!"').exec();
});

gulp.task('gdc-app-components-prepublish', function() {
    return run('echo "Running gdc-app-components prepublish..."\n' +
        '  npm run prepublish  --prefix ../gdc-app-components\n' +
        '  cp -r ../gdc-app-components/dist ../gdc-dashboards/node_modules/\\@gooddata/app-components\n' +
        '  cp -r ../gdc-app-components/dist ../gdc-analytical-designer/node_modules/\\@gooddata/app-components\n' +
        '  echo "gdc-app-components prepublished & copied!"').exec();
});

gulp.task('gooddata-react-components-prepublish', function() {
    return run('echo "Running gooddata-react-components prepublish..."\n' +
        '  npm run prepublish  --prefix ../gooddata-react-components\n' +
        '  cp -r ../gooddata-react-components/dist ../gdc-dashboards/node_modules/\\@gooddata/react-components\n' +
        '  cp -r ../gooddata-react-components/dist ../gdc-analytical-designer/node_modules/\\@gooddata/react-components\n' +
        '  echo "gooddata-react-components prepublished & copied!"').exec();
});

gulp.task('gdc-goodstrap-prepublish', function() {
    return run('echo "Running gdc-goodstrap prepublish..."\n' +
        '  npm run prepublish --prefix ../gdc-goodstrap\n' +
        '  cp -r ../gdc-goodstrap/lib ../gdc-dashboards/node_modules/\\@gooddata/goodstrap\n' +
        '  cp -r ../gdc-goodstrap/lib ../gdc-analytical-designer/node_modules/\\@gooddata/goodstrap\n' +
        '  echo "gdc-goodstrap prepublished & copied!"').exec();
});

gulp.task('gooddata-js-prepublish', function() {
    return run('echo "Running gooddata-js prepublish..."\n' +
        '  npm run prepublish --prefix ../gooddata-js\n' +
        '  cp -r ../gooddata-js/dist ../gdc-dashboards/node_modules/gooddata/dist\n' +
        '  cp -r ../gooddata-js/lib ../gdc-dashboards/node_modules/gooddata/lib\n' +
        '  cp -r ../gooddata-js/src ../gdc-dashboards/node_modules/gooddata/src\n' +
        '  echo "gooddata-js prepublished & copied!"').exec();
});

gulp.task('default', function () {
    console.log("Running gdc-app-components watcher...");
    gulp.watch(["../gdc-app-components/src/**/*"], ["gdc-app-components-prepublish"]);

	console.log("Running gooddata-data-layer watcher...");
    gulp.watch(["../gooddata-data-layer/src/**/*"], ["data-layer-prepublish"]);

    console.log("Running gooddata-react-components watcher...");
    gulp.watch(["../gooddata-react-components/src/**/*"], ["gooddata-react-components-prepublish"]);

    console.log("Running gooddata-indigo-visualizations watcher...");
    gulp.watch(["../gooddata-indigo-visualizations/src/**/*"], ["indigo-visualizations-prepublish"]);

    console.log("Running gdc-goodstrap watcher...");
    gulp.watch(["../gdc-goodstrap/src/**/*"], ["gdc-goodstrap-prepublish"]);

    console.log("Running gooddata-js watcher...");
    gulp.watch(["./src/**/*"], ["gooddata-js-prepublish"]);
});

