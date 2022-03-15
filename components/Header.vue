<template>
  <v-app-bar
  elevation="0"
  color="#FFFFFF"
  height="36px"
  >
    <v-app-bar-nav-icon @click="toggleDrawer" :data-test-id="`toggleable-btn-${this.dataId}`"></v-app-bar-nav-icon>
    <v-app-bar-title style="font-size: 30px; margin-left:-10px;" :data-test-id="this.dataId">
      {{ title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      default: 'Title',
      required: true,
    },
    dataId: {
      type: String,
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch('store/toggleNavigationDrawer', !this.$store.getters['store/getNavigationDrawerStatus']);
    },
  },
};
</script>
<style scoped>

</style>
