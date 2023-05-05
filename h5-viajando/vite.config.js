import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import postCssPxToRem from "postcss-pxtorem";
import autoprefixer from 'autoprefixer';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
        }),
        postCssPxToRem({
          rootValue: 42.8, // 1rem，根据 设计稿宽度/10 进行设置 42.8表示428设计稿，37.5表示375设计稿
          propList: ["*", "!border"], // 需要转换的属性，这里选择全部都进行转换
          // propList: ["*", "!border"], // 除 border 外所有px 转 rem
          selectorBlackList: [".el-","van-"], // 过滤掉.el-开头的class，不进行rem转换
          exclude:'node_modules'
        }),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: "/@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  // resolve: {
  //   alias: {
  //     "/@": path.resolve(__dirname, "src"),
  //   },
  // },
  server: {
    host: "0.0.0.0",
    port: 8080,
    open:true
  },
});
