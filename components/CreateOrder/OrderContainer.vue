<template>
  <div class="order-form-container">
    <OrderForm />
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
</style>
