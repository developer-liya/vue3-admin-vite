import { defineConfig } from 'vite';
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",//打包路径
  //样式相关
  css:{},
  //打包相关
  esbuild:{},
  resolve: {
    alias:{// 配置文件路径别名
      '@': resolve(__dirname, './src'),// 设置别名
      "@/comps": resolve(__dirname,"src/components"),
    }
  },
  plugins: [
      vue(), // 处理vue文件
      vueJsx(), // 处理jsx vue文件
      viteMockServe({// 配置mock数据
        // default
        mockPath: 'mock',
        supportTs: true,
        logger: true
        //{
        //     mockPath?: string;
        //     supportTs?: boolean;
        //     ignore?: RegExp | ((fileName: string) => boolean);
        //     watchFiles?: boolean;
        //     localEnabled?: boolean;
        //     ignoreFiles?: string[];
        //     configPath?: string;
        //     prodEnabled?: boolean;
        //     injectFile?: string;
        //     injectCode?: string;
        // }
      }),],
   server: {
    port:4000,//启动端口
    open: true,
    proxy: {
      // 选项写法
      // '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors:true
  }
})
