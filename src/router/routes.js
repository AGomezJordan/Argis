const routes = [
  {
    path: '/',
    component: () => import('src/modules/core/components/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/home/views/Index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/modules/core/components/error/Error404.vue'),
  },
];

export default routes;
