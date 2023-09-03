import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // чтоб дев-сервер не ругался на ситуацию, если мы обновляем страинцу не главную
    historyApiFallback: true,
    hot: true,
  };
}
