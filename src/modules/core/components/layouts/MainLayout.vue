<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="miniState ? 'chevron_right' : 'chevron_left'"
          @click="miniState = !miniState"
        />

        <q-toolbar-title>
          Arcgis Aplication
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-secondary text-white drawer"
      show-if-above
      :mini="miniState"
      width="200"
    >
      <q-list padding class="menu-list">
        <q-item
          v-for="(route, key) in routes"
          :key="key"
          clickable
          :class="$route.name === route.name ? 'text-positive' : ''"
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
      <Loader v-if="run" />
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import routes from 'src/router/routes';
import Loader from 'components/loader/views';
import { mapState } from 'vuex';

export default{
  name: 'MainLayout',
  components: {
    Loader
  },
  data () {
    return {
      miniState: true,
      routes: [],
    }
  },
  computed: {
    ...mapState('loader', ['run']),
  },
  created() {
    this.routes = routes.filter(e => e.hidden !== true)[0].children;
  },
  methods: {
    pushRoute(route) {
      this.$router.push('/' + route.path);
    }
  }
};
</script>

<style scoped>
.drawer {
  height: 600px;
}
</style>
