<template>
  <v-navigation-drawer
    color="#EDEDED"
    permanent
    v-model="drawer"
    :mini-variant="true"
    mini-variant-width="85"
    :clipped="clipped"
    fixed
    app
  >
    <div class="navigation-container">
      <div >
        <NuxtLink to="/">
        <img src="~/assets/images/BlueLogo.svg" alt="sort svg" width="60" height="60"/>
        </NuxtLink>
      </div>
      <div class="nav-items-container perfect-center" data-test-id="create-order-img">
        <NuxtLink to="/create_order">
        <img src="~/assets/images/Cube.svg" alt="sort svg" width="20" height="22.5"/>
        </NuxtLink>
      </div>
      <div class="nav-items-container perfect-center">
        <img src="~/assets/images/Layers.svg" alt="sort svg" width="22.5" height="22.5"/>
      </div>
      <div class="nav-items-container perfect-center">
        <img src="~/assets/images/Settings.svg" alt="sort svg" width="22.5" height="22.5"/>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
<style scoped>
.navigation-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 15px;
}
.nav-items-container{
  width: 85px;
  height: 64px;
}

.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
