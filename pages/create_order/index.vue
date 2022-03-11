<template>
  <div>
    <Header title="Create Order" />
    <OrderContainer/>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header';
import OrderContainerComponent from '../../components/CreateOrder/OrderContainer';

export default {
  name: 'CreateOrderComponent',
  components: {
    OrderContainer: OrderContainerComponent,
    Header: HeaderComponent,
  },
};
</script>
<style scoped></style>
