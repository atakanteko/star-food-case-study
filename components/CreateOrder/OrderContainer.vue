<template>
  <div class="order-form-container">
    <OrderForm v-model="menu" :signal="this.clearSignalForOrderItems"/>
    <div class="line"></div>
    <OrderInformation @clearSignal="clearSignal"/>
  </div>
</template>

<script>
import OrderFormComponent from './OrderForm';
import OrderInformationComponent from './OrderInformation';

export default {
  name: 'OrderContainerComponent',
  components: {
    OrderInformation: OrderInformationComponent,
    OrderForm: OrderFormComponent,
  },
  data() {
    return {
      menu: this.$store.getters['store/getMenuList'].list,
      clearSignalForOrderItems: null,
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    clearSignal(signal) {
      this.clearSignalForOrderItems = signal;
    },
  },
};
</script>
<style scoped>
.order-form-container {
  display: flex;
  flex-direction: row;
}
.line{
  margin-left: 34px;
  margin-right: 47px;
  margin-top: 59px;
  border: 1px solid #EBEBEB;
  height: 682px;
}
</style>
