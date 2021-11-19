<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="miniState = !miniState" />

        <q-toolbar-title>
          Arcgis Aplication
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :mini="miniState"
      side="left"
      width="200"
      dark
    >
      <q-list padding class="menu-list">
        <q-item
          v-for="(route, key) in routes"
          :key="key"
          clickable
          v-ripple
          @click="pushRoute(route)"
        >
          <q-item-section avatar>
            <q-icon :name="route.icon" />
          </q-item-section>
          <q-item-section>
            {{ route.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import routes from '../../../../router/routes';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      miniState: ref(true),
      routes: [],
    }
  },
  created() {
    this.routes = routes.filter(e => e.hidden !== true)[0].children;
  },
  methods: {
    pushRoute(route) {
      this.$router.push('/' + route.path);
    }
  }
});
</script>

<style scoped>
</style>
