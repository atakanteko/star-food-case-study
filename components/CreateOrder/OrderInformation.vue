<template>
  <div class="order-information">
    <div class="delivery-details">
      <h1 class="delivery-title">Delivery Details</h1>
      <div class="triple-info">
        <div class="order-delivery">
          <h4 class="common-order-title">Order Item</h4>
          <div class="margin-top-info">
            <span class="info-style">-</span>
          </div>
        </div>
        <div class="number-delivery">
          <h4 class="common-order-title">Number</h4>
          <div class="margin-top-info">
            <span class="info-style">-</span>
          </div>
        </div>
        <div class="cost-delivery">
          <h4 class="common-order-title">Cost</h4>
          <div class="margin-top-info">
            <span class="info-style">-</span>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery-details amount">
      <h1 class="delivery-title">Total Amount:</h1>
      <div>
        <span class="info-style" style="margin-right: 32px">-</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderInformationComponent',
};
</script>
<style scoped>
.order-information{
  line-height: normal;
}
.amount {
  display: flex;
  justify-content: space-between;
}
.info-style{
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #171719;
}
.delivery-details{
  width: 651px;
  height: fit-content;
  background: #F6F6F6;
  border-radius: 5px;
  margin-top: 22px;
  padding: 26px;
}
.delivery-title{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #171719;
}
.common-order-title{
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #737376;
}
.triple-info{
  margin-top: 29px;
  display: flex;
  justify-content: space-between;
}

.margin-top-info{
  margin-top: 8px !important;
}
</style>
