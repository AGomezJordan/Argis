const routes = [
    {
      path: 'maps',
      name: 'Maps',
      icon: 'map',
      hidden: false,
      component: () => import('modules/maps/views/index.vue')
    },
];

export default routes;