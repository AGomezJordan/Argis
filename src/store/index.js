import Vuex from 'Vuex';
import common from '../modules/core/store/common';
import { retMod } from '../utils/index';

export const {
  state, getters, actions, mutations,
} = common;

let modules = retMod(
  require.context('../modules', true, /^(?!.*(?:router|core)).*index.js$/),
);

const components = retMod(
  require.context('../modules/core/components', true, /^(?!.*(?:router|core)).*index.js$/),
);

modules = { ...modules, ...components };
const store = new Vuex.Store({
  modules,
  state,
  getters,
  actions,
  mutations,
});

export default store;
