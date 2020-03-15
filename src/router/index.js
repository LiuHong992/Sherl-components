import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // 首页
    {
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'index',
            meta: {
                title: '首页'
            },
            component: () =>
                import ('../views/Index.vue')
        }]
    },
    // 趋势
    {
        path: '/trend',
        component: Home,
        children: [{
            path: '',
            name: 'trend',
            meta: {
                title: '趋势'
            },
            component: () =>
                import ('../views/Trend')
        }]
    },
    // 登录
    {
        path: '/login',
        component: Home,
        children: [{
            path: '',
            name: 'login',
            meta: {
                title: '登录'
            },
            component: () =>
                import ('../views/Commonlogin')
        }]
    },
    // 图片预览
    {
        path: '/imagepre',
        component: Home,
        children: [{
            path: '',
            name: 'imagepre',
            meta: {
                title: '图片预览'
            },
            component: () =>
                import ('../views/Imagepre')
        }]
    },
    // 通知图标
    {
        path: '/notifyicon',
        component: Home,
        children: [{
            path: '',
            name: 'notifyicon',
            meta: {
                title: '通知图标'
            },
            component: () =>
                import ('../views/Notifyicon')
        }]
    },
    // 标签选择器
    {
        path: '/tagselector',
        component: Home,
        children: [{
            path: '',
            name: 'tagselector',
            meta: {
                title: '标签选择器'
            },
            component: () =>
                import ('../views/Tagselector')
        }]
    },
    // 进度条
    {
        path: '/progressbar',
        component: Home,
        children: [{
            path: '',
            name: 'progressbar',
            meta: {
                title: '进度条'
            },
            component: () =>
                import ('../views/Progressbar')
        }]
    },
    // 锁屏
    {
        path: '/lock',
        component: Home,
        children: [{
            path: '',
            name: 'lock',
            meta: {
                title: '锁屏'
            },
            component: () =>
                import ('../views/Lock')
        }]
    },
    // 全屏
    {
        path: '/fullscreen',
        component: Home,
        children: [{
            path: '',
            name: 'fullscreen',
            meta: {
                title: '全屏'
            },
            component: () =>
                import ('../views/Fullscreen')
        }]
    },
    // 底部工具栏
    {
        path: '/bottombar',
        component: Home,
        children: [{
            path: '',
            name: 'bottombar',
            meta: {
                title: '底部工具栏'
            },
            component: () =>
                import ('../views/Bottombar')
        }]
    },
    // 拖拽dialog
    {
        path: '/dragdialog',
        component: Home,
        children: [{
            path: '',
            name: 'dragdialog',
            meta: {
                title: '拖拽dialog'
            },
            component: () =>
                import ('../views/Dragdialog')
        }]
    },
    // 行内可编辑表格
    {
        path: '/lineedit',
        component: Home,
        children: [{
            path: '',
            name: 'lineedit',
            meta: {
                title: '行内可编辑表格'
            },
            component: () =>
                import ('../views/Lineedit')
        }]
    },
    // 单元格可编辑表格
    {
        path: '/celledit',
        component: Home,
        children: [{
            path: '',
            name: 'celledit',
            meta: {
                title: '单元格可编辑表格'
            },
            component: () =>
                import ('../views/Celledit')
        }]
    },
    // 回到顶部
    {
        path: '/backtop',
        component: Home,
        children: [{
            path: '',
            name: 'backtop',
            meta: {
                title: '回到顶部'
            },
            component: () =>
                import ('../views/Backtop')
        }]
    },
    // 403错误
    {
        path: '/403',
        component: Home,
        children: [{
            path: '',
            name: '403',
            meta: {
                title: '403错误'
            },
            component: () =>
                import ('../views/403')
        }]
    },
    // 404错误
    {
        path: '/404',
        component: Home,
        children: [{
            path: '',
            name: '404',
            meta: {
                title: '404错误'
            },
            component: () =>
                import ('../views/404')
        }]
    },
    // 500错误
    {
        path: '/500',
        component: Home,
        children: [{
            path: '',
            name: '500',
            meta: {
                title: '500错误'
            },
            component: () =>
                import ('../views/500')
        }]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router