import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";

global.app = {
    path,
    gulp,
    plugins,
};

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(copy, html, scss);
const devTasks = gulp.series(clean, mainTasks, gulp.parallel(server, watcher));

gulp.task("default", devTasks);
