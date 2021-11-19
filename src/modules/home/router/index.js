const routes = [
    {
      path: '',
      name: 'Home',
      icon: 'home',
      hidden: false,
      component: () => import('modules/home/views/Index.vue')
    },
];

export default routes;