<template>
  <div class="order-form-container">
    <OrderForm />
    <div class="line"></div>
    <OrderInformation/>
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

}
</style>
