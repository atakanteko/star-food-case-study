<template>
  <v-navigation-drawer
    color="#F6F6F6"
    permanent
    v-model="drawer"
    :mini-variant="this.$store.getters['store/getNavigationDrawerStatus']"
    mini-variant-width="0"
    :clipped="clipped"
    fixed
    app
    class="align-margin-left"
    width="309"
  >
    <div>
      <div class="info-list-title"><h1>Orders</h1></div>
      <div class="info-list">
        <div><span class="list-font-style">New Order</span></div>
        <div><span class="list-font-style-gray">1</span></div>
      </div>
      <div class="info-list">
        <div><span class="list-font-style">Accepted</span></div>
        <div><span class="list-font-style-gray">1</span></div>
      </div>
      <div class="info-list">
        <div><span class="list-font-style">Cooking</span></div>
        <div><span class="list-font-style-gray">3</span></div>
      </div>
      <div class="info-list">
        <div><span class="list-font-style">Parcel Ready</span></div>
        <div><span class="list-font-style-gray">3</span></div>
      </div>
      <div class="info-list">
        <div><span class="list-font-style">Delivered</span></div>
        <div><span class="list-font-style-gray">1</span></div>
      </div>

    </div>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'ToggleableDrawer',
  props: {
    which: {
      type: Number,
    },
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
<style scoped lang="scss">
.info-list{
  display: flex;
  justify-content: space-between;
  padding: 0 26px 0 29px;
  margin-top: 37px;
  margin-bottom: 27px;
}
.info-list-title{
  padding: 27px 26px 0 29px;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
  }
}
.list-font-style-common{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
}

.list-font-style{
  @extend .list-font-style-common
}
.list-font-style-gray{
  @extend .list-font-style-common;
  color: #B4B4B5;
}
</style>
