import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

const concatPathAndFileName = (path, files) => {
  return files.map((file) => `${path}/${file}`);
};

const handleError = (taskName) => {
  return plumber({
    errorHandler: notify.onError({
      title: taskName,
      message: 'Error: <%= error.message %>',
    }),
  });
};

export const plugins = {
  if: ifPlugin,
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  concat: concatPathAndFileName,
  handleError,
};
