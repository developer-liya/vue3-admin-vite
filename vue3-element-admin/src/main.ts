import { createApp } from 'vue';
import 'element-plus/lib/theme-chalk/index.css';
// 引入中文包
import locale from 'element-plus/lib/locale/lang/zh-cn';

import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';// 引入路由
import store from './store'; // 引入vuex


const app = createApp(App);
app.use(router);// 注册路由
app.use(store);// 注册vuex
app.use(ElementPlus, {locale});// 注册element-plus 插件

// 配置 element-plus 组件参数
const option = {
    size: 'small', zIndex: 3000
};

app.config.globalProperties.$ELEMENT = option;


// 挂载到页面
app.mount('#app')
