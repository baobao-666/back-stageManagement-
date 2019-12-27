import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 班级管理路由
  {
    path:"/classroom",
    component: Layout,
    name: 'classRoom',
    meta: { title: '班级管理', icon: 'documentation', affix: true },
    children:[
      {
        path:"/classroom/classmanagement",
        component:()=>import('@/views/classRoom/classManagement/index'),
        name:"classmanagement",
        meta:{title:"班级管理"}
      },
      {
        path:"/classroom/Classroommanagement",
        component:()=>import('@/views/classRoom/ClassroomManagement/index'),
        name:'Classroommanagement',
        meta:{title:"教室管理"}
      },
      {
        path:"/classroom/studentManagement",
        component:()=>import('@/views/classRoom/studentManagement/index'),
        name:'studentManagement',
        meta:{title:"学生管理"}
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
      
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  },
 
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    meta: { title: '考试管理', icon: 'guide', noCache: true },
    children: [
      {
        path: '/Addexam',
        component: () => import('@/views/exam/Addexam'),
        name: 'AddExam',
        meta: { title: '添加考试', icon: 'guide', noCache: true },
      },
      {
        path: '/Listexam',
        component: () => import('@/views/exam/Listexam'),
        name: 'ListExam',
        meta: { title: '试卷列表', icon: 'guide', noCache: true },
      },
      {
        path: '/Addexam/Addedit',
        component: () => import('@/views/exam/Addedit'),
        name: 'Addedit',
      },
      {
        path: '/Detail',
        component: () => import('@/views/exam/Detail'),
        name: 'Detail',
      }
    ]
  },
  
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  },

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () =>import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/examination',
    component: Layout,
    redirect: '/examination/backlog',
    alwaysShow: true, // will always show the root menu
    name: 'Examination',
    meta: {
      title: '阅卷管理',
      icon: 'edit',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'backlog',
        component: () => import('@/views/examination/backlog'),
        name: 'Examination',
        meta: {
          title: '待批班级',
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/test-questions',
    component: Layout,
    redirect: '/test-questions/add',
    alwaysShow: true, // will always show the root menu
    name: 'test-questions',
    meta: {
      title: '试题管理',
      icon: 'edit',
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'add',
        component: () => import('@/views/test-questions/add'),
        name: 'test-questions',
        meta: {
          title: '添加试题',
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'classify',
        component: () => import('@/views/test-questions/classify'),
        name: 'Test-questions',
        meta: {
          title: '试题分类',
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'examine',
        component: () => import('@/views/test-questions/examine'),
        name: 'Test-questions',
        meta: {
          title: '查看试题',
        },
      },
      {
        path: 'update',
        hidden:true,
        component: () => import('@/views/test-questions/update/'),
        name: 'Test-update',
        meta: {
          title: '编辑试题',
        },
      },
      {
        path: 'detail',
        hidden:true,
        component: () => import('@/views/test-questions/detail'),
        name: 'Test-detail',
        meta: {
          title: '试题详情',
        },
      }
    ]
  },
  
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit'}
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list'},
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },
  
  {
    path: '/exs',
    component: Layout,
    // redirect: 'noRedirect',
    // name: 'ErrorPages',
    meta: {
      title: '用户管理',
      icon: 'edit'
    },
    children: [
      {
        path: 'add',
        component: () => import('@/views/exs/add'),
        name: 'Add',
        meta: { title: '添加用户', noCache: true }
      },
      {
        path: 'exhibition',
        component: () => import('@/views/exs/exhibition'),
        name: 'Exhibition',
        meta: { title: '用户展示', noCache: true }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },
  

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'mergeHeader' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'pdf', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/i18n-demo/index'),
        name: 'I18n',
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'externalLink', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const authorityRoutes = [
  {
    path:"/classroom",
    component: Layout,
    meta: { title: '班级管理', icon: 'documentation'},
    children:[
      {
        path:"classmanagement",
        component:()=>import('@/views/classRoom/classManagement/index'),
        name:"classmanagement",
        meta:{title:"班级管理",icon: 'dashboard', view_id: 'main-grade'}
      },
      {
        path:"Classroommanagement",
        component:()=>import('@/views/classRoom/ClassroomManagement/index'),
        name:'Classroommanagement',
        meta:{title:"教室管理",icon: 'dashboard', view_id: 'main-room'}
      },
      {
        path:"studentManagement",
        component:()=>import('@/views/classRoom/studentManagement/index'),
        name:'studentManagement',
        meta:{title:"学生管理",icon: 'dashboard', view_id: 'main-student'}
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
