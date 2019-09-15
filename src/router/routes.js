
const routes = [
  {
    path: '/',
    component: () => import('layouts/Login_Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '\login',name:'login', component: () => import('components/login.vue') },
      { path: '\Guest',name:'guest',component: () => import('components/Guest.vue') },
      { path: '\about',name:'about',component: () => import('components/about.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/admin_Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '\Show_admin:admin_obj',name:'Edit_details',props:true ,component: () => import('components/Show_admin.vue') },
      
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '\edit_profile',name:'edit_profile',component: () => import('components/edit_profile.vue') },
      { path: '\add_criminal',name:'add_criminal',component: () => import('components/add_criminal.vue') },
      { path: '\search_criminal',name:'search_criminal',component: () => import('components/search_criminal.vue') },
      { path: '\edit_criminal:criminal_id',name:'edit_criminal',props:true,component: () => import('components/edit_criminal.vue') },
      
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
     path: '*',
     component: () => import('pages/Error404.vue')
  })
}

export default routes
