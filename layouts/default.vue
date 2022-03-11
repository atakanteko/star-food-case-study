<template>
  <v-app dark>
    <NavigationDrawer />
    <ToggleableDrawer />
    <v-main>
      <div class="main-container">
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer';
import ToggleableDrawer from '../components/ToggleableDrawer';

export default {
  name: 'DefaultLayout',
  components: { ToggleableDrawer, NavigationDrawer },
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
.v-toolbar__content{
  padding: 0 !important;
}
.v-app-bar-title__content{
  width: fit-content !important;
}
.align-margin-left{
  margin-left: 85px !important;
}
.v-input--radio-group__input label{
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 21px !important;
  color: #171719 !important;
  margin-left: 4px;
}
</style>
