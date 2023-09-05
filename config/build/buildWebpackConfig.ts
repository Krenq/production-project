import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    /*
    это мод нашего приложения, либо в стадии разработки 'development', либо в стадии боя 'production',
    чтоб webpack понимал как и для какого мода ему обрабатывать и сжимать файлы
     */
    mode,
    // стартовая точка нашего приложения
    entry: paths.entry,

    // куда и как мы будем делать сборку нашего приложения
    output: {
      /* как будет называть главный файл нашего приложения, конструкция [contenthash] нужна для
       оптимизации и хэширования файла в браузере */
      filename: '[name].[contenthash].js',
      // путь куда будут сохраняться файлы сборки и название этой папки
      path: paths.build,
      // нужно для того, чтобпри сборке в папке сборки старые файлы не собирались, а удалялись
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    // это свойство отвечает за то, чтоб мы не писали больше при импорте расширения, которые сюда укажем в extensions
    resolve: buildResolvers(options),
    // чтоб мы могли отследить ошибку в конкретном файле или функции при неудачной сборке webpack-dev-server
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
