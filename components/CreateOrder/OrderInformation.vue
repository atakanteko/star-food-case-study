<template>
  <div class="order-information">
    <div class="delivery-details">
      <h1 class="delivery-title">Delivery Details</h1>
      <div class="delivery-titles">
        <h4 class="common-order-title" style="margin-right: 176px">Order Item</h4>
        <h4 class="common-order-title" style="margin-right: 196px;">Number</h4>
        <h4 class="common-order-title" >Cost</h4>
      </div>
      <div class="delivery-content margin-top-info"
           v-if="this.$store.getters['store/getSelectedOrderedMeals'].length === 0">
        <span class="info-style" style="margin-right: 259px">-</span>
        <span class="info-style" style="margin-right: 256px">-</span>
        <span class="info-style">-</span>
      </div>
      <div class="d-flex mt-3"
           v-for="(item,index) in this.$store.getters['store/getSelectedOrderedMeals']"
           :key="index"
           v-else>
        <div class="d-names d-flex flex-column" style="width: 263px">
          <span class="info-style">{{item.name.length>22? `${item.name.substring(0,22)}...` : item.name}}</span>
        </div>
        <div class="d-quantity d-flex flex-column" style="width: 263px">
          <span class="info-style">{{item.quantity}}</span>
        </div>
        <div class="q-price d-flex flex-column">
          <span class="info-style">{{item.cost}}$</span>
        </div>
      </div>
     </div>
    <div class="delivery-details amount">
      <h1 class="delivery-title">Total Amount:</h1>
      <div>
        <span class="info-style" style="margin-right: 32px" v-if="this.totalPrice === 0">-</span>
        <span class="info-style" style="margin-right: 32px" v-else>{{this.totalPrice}}$</span>
      </div>
    </div>
    <section class="order-section-button">
      <div>
        <button id="cancel-btn"
                @click="clearAll"
                v-if="this.$store.getters['store/getSelectedOrderedMeals'].length > 0"><span>Cancel</span></button>
        <button id="order-btn"
                :class="{greenBg:this.$store.getters['store/getSelectedOrderedMeals'].length > 0}"
                @click="createModel"
        >
          <span>Add Order</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OrderInformationComponent',
  props: {
    contactInput: {
      type: String,
    },
    nameInput: {
      type: String,
    },
    radioInfo: {
      type: String,
    },
    clientInfo: {
      type: String,
    },
    orderNum: {
      type: Number,
    },
    timeInfo: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.$store.getters['store/getSelectedOrderedMeals'].forEach(item => {
        total += item.cost;
      });
      return total;
    },
  },
  methods: {
    clearAll() {
      this.$store.dispatch('store/clearAll');
      this.$emit('clearSignal', true);
    },
    createModel() {
      const listModel = {
        timeInfo: this.timeInfo,
        orderNumber: this.orderNum,
        name: this.nameInput,
        contact: this.contactInput,
        radio: this.radioInfo || 'Delivery',
        clientMessage: this.clientInfo,
        orderedItems: this.$store.getters['store/getSelectedOrderedMeals'],
        totalCost: this.totalPrice,
      };
      this.$store.dispatch('store/listModelAction', listModel);
      this.$emit('clearSignal', true);
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.order-information{
  line-height: normal;
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

.delivery-content{
  display: flex;
}

.common-order-title{
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #737376;
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

.delivery-titles{
  margin-top: 29px;
  display: flex;
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
