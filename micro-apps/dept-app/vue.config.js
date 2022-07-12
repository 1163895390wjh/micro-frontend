const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: true,
    port: 3004,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  // chainWebpack: (config) => {
  //   const dir = path.resolve(__dirname, "src/assets/icons");
  //   config.module
  //     .rule("svg-sprite")
  //     .test(/\.svg$/)
  //     .include.add(dir)
  //     .end()
  //     .use("svg-sprite-loader")
  //     .loader("svg-sprite-loader")
  //     .options({ extract: false })
  //     .end();
  //   config
  //     .plugin("svg-sprite")
  //     .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
  //   config.module.rule("svg").exclude.add(dir);
  // },
});
