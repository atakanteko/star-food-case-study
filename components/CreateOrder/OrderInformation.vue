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
    <section class="order-section-button">
      <div>
        <button id="cancel-btn" v-if="this.$store.getters['store/getSelectedOrderedMeals'].length > 0"><span>Cancel</span></button>
        <button id="order-btn" :class="{greenBg:this.$store.getters['store/getSelectedOrderedMeals'].length > 0}"><span>Add Order</span></button>
      </div>
    </section>
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

.order-section-button{
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}
.greenBg{
  background-color: #0DC74E !important;
  border: 1.5px solid #0DC74E !important;
}
#order-btn{
  width: 314px;
  height: 63px;
  background: #2A71FA;
  border-radius: 5px;
  padding: 18px 103px;
  border: 1.5px solid #2A71FA;
}

#order-btn span {
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
  color: #F6F6F6;

}

#cancel-btn{
  width: 314px;
  height: 63px;
  margin-right: 17px;
  border-radius: 5px;
  padding: 18px 103px;
  background: #FFFFFF;
  border: 1.5px solid #CCCCCC;
  box-sizing: border-box;
}

#cancel-btn span {
  font-size: 23px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #737376
}
</style>
