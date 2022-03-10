<template>
  <v-app-bar
  elevation="0"
  color="#FFFFFF"
  height="36px"
  >
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-app-bar-title style="font-size: 30px; margin-left:-10px ">
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
  },
  methods: {
    toggleDrawer() {
      console.log('222');
    },
  },
};
</script>
<style scoped>

</style>
