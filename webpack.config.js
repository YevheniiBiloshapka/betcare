import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
};

export const webpackConfig = (isMode) => {
  return {
    entry: {
      app: ['@babel/polyfill', path.join(paths.src, 'js/app.js')],
      cta: ['@babel/polyfill', path.join(paths.src, 'js/cta.js')],
      // Добавьте другие страницы по аналогии
    },

    mode: isMode ? 'development' : 'production',

    output: {
      path: path.join(paths.build, 'js'),
      filename: '[name].min.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,

          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },

          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };
};
