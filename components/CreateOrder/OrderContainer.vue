<template>
  <div class="order-form-container">
    <OrderForm v-model="menu"
               :signal="this.clearSignalForOrderItems"
               @sendContactInputValue="sendContactInputValue"
               @sendNameInputValue="sendNameInputValue"
               @sendClientMessage="sendClientMessage"
               @sendRadioValue="sendRadioValue"
    />
    <div class="line"></div>
    <OrderInformation @clearSignal="clearSignal"
                      :nameInput="this.iValue"
                      :contactInput="this.cValue"
                      :radioInfo="this.radioMes"
                      :clientInfo="this.clientMes"
    />
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
      iValue: null,
      cValue: null,
      clientMes: null,
      radioMes: null,
    };
  },
  methods: {
    clearSignal(signal) {
      this.clearSignalForOrderItems = signal;
    },
    sendNameInputValue(val) {
      this.iValue = val;
    },
    sendContactInputValue(val) {
      this.cValue = val;
    },
    sendRadioValue(val) {
      this.radioMes = val;
    },
    sendClientMessage(val) {
      this.clientMes = val;
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
