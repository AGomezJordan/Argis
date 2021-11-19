import { retRoute, fromObjectToArr } from 'src/utils';

const routes = retRoute(
  require.context('../modules', true, /^(?!.*(?:store|components)).*index.js$/)
);

const routesLay = {
  path: '/',
  component: () => import('components/layouts/MainLayout.vue'),
  children: fromObjectToArr(routes),
};

const routeNotFound = {
  path: '/:catchAll(.*)*',
  hidden: true,
  component: () => import('src/modules/core/components/error/Error404.vue'),
};

export default [
  routesLay,
  routeNotFound
];
