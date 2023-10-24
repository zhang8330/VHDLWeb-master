import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../layout'),
        redirect:"/upload/main",
        //redirect:"/getSimulationStructure",
        children:[
            {
                path: '/Home',
                name: '/Home',
                component: () => import('../view/Home')
            },
            {
                path: '/upload/main',
                name: '/upload/main',
                component: () => import('../view/upload/MainController')
            },
            {
                path: '/upload/sub',
                name: '/upload/sub',
                component: () => import('../view/upload/SubController')
            },
            {
                path: '/upload/atomic',
                name: '/upload/atomic',
                component: () => import('../view/upload/Atomic')
            },
            {
                path: '/generate/main',
                name: '/generate/main',
                component: () => import('../view/generate/MainController')
            },
            {
                path: '/generate/atom',
                name: '/generate/atom',
                component: () => import('../view/generate/Atom')
            },
            {
                path: '/generate/sub',
                name: '/generate/sub',
                component: () => import('../view/generate/SubController')
            },
            {
                path: '/help',
                name: '/help',
                component: () => import('../view/help')
            },
            {
                path: '/assemble',
                name: '/assemble',
                component: () => import('../view/assemble')
            },
            {
                path: '/download',
                name: '/download',
                component: () => import('../view/download')
            },
            // {
            //     path: '/BD/JudgeAndCompleteAndGenerate',
            //     name: '/BD/JudgeAndCompleteAndGenerate',
            //     component: () => import('../view/BD/JudgeAndCompleteAndGenerate')
            // },
            {
                path: '/physical/JudgeAndCompleteAndGenerate',
                name: '/physical/JudgeAndCompleteAndGenerate',
                component: () => import('../view/physical/JudgeAndCompleteAndGenerate')
            },
            {
                path: '/controllerVhdl',
                name: '/controllerVhdl',
                component: () => import('../view/controllerVhdl')
            },
            {
                path: '/assembleSystem',
                name: '/assembleSystem',
                component: () => import('../view/assembleSystem')
            },
            {
                path: '/getSimulationStructure',
                name: '/getSimulationStructure',
                component: () => import('../view/getSimulationStructure')
            },
            {
                path: '/propertyVerification',
                name: '/propertyVerification',
                component: () => import('../view/propertyVerification')
            },
            {
                path: '/simulationResult',
                name: '/simulationResult',
                component: () => import('../view/simulationResult')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    document.title = "基于软件IP的需求描述语言仿真工具";
    next();
});
export default router
