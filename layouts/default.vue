<template>
  <v-app dark>
    <NavigationDrawer />
    <v-main>
      <div class="main-container">
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer';

export default {
  name: 'DefaultLayout',
  components: { NavigationDrawer },
  comments: {
    NavigationDrawer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>

<style>
.main-container{
  padding-left: 36px !important;
  padding-top: 30px !important;
}
</style>
