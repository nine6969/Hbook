import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'via',
      redirect:'index',
      // component: () => import(/* webpackChunkName: 'fairDetail' */ '/@/views/login.vue'),
    },
    {
      path:'/login',
      name:'login',
      component: () => import(/* webpackChunkName: 'fairDetail' */ '/@/views/login.vue'),
      meta: {
        title:'Login in',
      },
    },
    {
      path:'/index',
      name:'index',
      component:()=>import(/* webpackChunkName: 'common' */ '/@/components/common.vue'),
      redirect: '/index/home',
      children: [
        {
          path:'home',
          name:'home',
          meta:{title:'explore'},
          component:()=>import(/* webpackChunkName: 'common' */ '/@/views/home/index.vue'),
        },
        {
          path:'wishlists',
          name:'wishlists',
          meta:{title:'Wishlists'},
          component:()=>import(/* webpackChunkName: 'wishlists' */ '/@/views/wishlists/index.vue'),
        },
        {
          path:'trips',
          name:'trips',
          meta:{title:'Trips'},
          component:()=>import(/* webpackChunkName: 'trips' */ '/@/views/trips/index.vue'),
        },
        {
          path:'Inbox',
          name:'Inbox',
          meta:{title:'Inbox'},
          component:()=>import(/* webpackChunkName: 'Inbox' */ '/@/views/Inbox/index.vue'),
        },
        {
          path:'profile',
          name:'profile',
          meta:{title:'Profile'},
          component:()=>import(/* webpackChunkName: 'profile' */ '/@/views/profile/index.vue'),
        }
      ],
    },
    {
      path:'/where',
      name:'where',
      meta:{title:'Where to',animate:true},
      component:()=>import(/* webpackChunkName: 'where' */ '/@/views/home/where.vue'),
    },
    {
      path:'/filters',
      name:'filters',
      meta:{title:'filters',animate:true},
      component:()=>import(/* webpackChunkName: 'filters' */ '/@/views/home/filter.vue'),
    },
    {
      path:'/homeDetail',
      name:'homeDetail',
      meta:{title:'Place',animate:true},
      component:()=>import(/* webpackChunkName: 'homeDetail' */ '/@/views/home/detail.vue'),
    },
    {
      path:'/InboxAdd',
      name:'InboxAdd',
      meta:{title:'Inbox',animate:true},
      component:()=>import(/* webpackChunkName: 'InboxAdd' */ '/@/views/home/InboxAdd.vue'),
    },
    {
      path:'/personalInfo',
      name:'personalInfo',
      meta:{title:'Personal info',animate:false},
      component:()=>import(/* webpackChunkName: 'personalInfo' */ '/@/views/profile/personalInfo.vue'),
    },
    {
      path:'/pay',
      name:'pay',
      meta:{title:'Payment & payouts',animate:false},
      component:()=>import(/* webpackChunkName: 'pay' */ '/@/views/profile/pay.vue'),
    },
    {
      path:'/translation',
      name:'translation',
      meta:{title:'Translation',animate:false},
      component:()=>import(/* webpackChunkName: 'translation' */ '/@/views/profile/translation.vue'),
    },
    {
      path:'/noticfication',
      name:'noticfication',
      meta:{title:'noticfication',animate:false},
      component:()=>import(/* webpackChunkName: 'noticfication' */ '/@/views/Inbox/noticfication.vue'),
    },
    {
      path:'/privacyShare',
      name:'privacyShare',
      meta:{title:'Privacy and sharing',animate:false},
      component:()=>import(/* webpackChunkName: 'privacyShare' */ '/@/views/profile/privacyShare.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
    next()
})

export default router;