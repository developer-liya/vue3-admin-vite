import {createRouter, createWebHashHistory} from 'vue-router'

//由之前的new Router改为了由工厂函数去创建
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', component: () => import('@/views/login/Login.vue')}
    ]
})

export default router;