<template>
  <div class="order-form">
    <section class="order-section-one">
      <div class="order-label">
        <span>Order Number:</span>
        <span class="gray-label">#{{ orderNumber }}</span>
      </div>
      <div class="order-label">
        <span style="margin-right: 17px;">Date & Time:</span>
        <span class="gray-label">{{ time }}</span>
      </div>
    </section>
    <section class="order-section-two">
      <TextField text-area-label="Name"  class="mt-8" id="text-field-name"/>
      <TextField text-area-label="Contact" class="mt-8" id="text-field-contact"/>
    </section>
    <section class="order-section-three">
      <div class="radio-section">
        <h1 id="radio-title">Trans Type</h1>
        <div>
          <v-radio-group row v-model="radios">
            <v-radio
              label="Delivery"
              color="primary"
              value="Delivery"
            ></v-radio>
            <v-radio
              label="Takeaway"
              color="primary"
              value="Takeaway"
              ></v-radio>
          </v-radio-group>
        </div>
      </div>
      <div class="client-message-section">
        <h1 class="message-section-title">Message to client</h1>
        <div>
          <v-text-field
            v-model="clientMessage"
            class="text-field-message"
            solo
            flat
          ></v-text-field>
        </div>
      </div>
      <div class="order-items-section">
        <h1 class="message-section-title">Order Items</h1>
        <div>
          <v-select
            v-model="selectedMeals"
            :items="items"
            label="Pending"
            multiple
            outlined
            style="width: 730px !important;"
          ></v-select>
        </div>
      </div>
    </section>
    <section class="order-section-selected-meals">
      <div class="item-row">
        <div><h3 id="order-item-name">Beef Stroganoff</h3></div>
        <div class="sub-items-display">
          <h3 id="order-item-price">29$</h3>
          <div id="meal-counter">
            <span class="counter-font">-</span>
            <span id="counter-number-font">1</span>
            <span class="counter-font">+</span>
          </div>
          <div style="margin-left: 30px; margin-top:3px"><img src="../../assets/images/remove.svg" alt=""></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextField from '../TextField';

export default {
  name: 'OrderFormComponent',
  components: { TextField },
  props: {
    value: {
      type: Array,
    },
  },
  data() {
    return {
      time: null,
      orderNumber: null,
      items: null,
      selectedMeals: [],
      clientMessage: null,
      radios: 'Delivery',
    };
  },
  watch: {
    selectedMeals(newValue) {
      this.$store.dispatch('store/calculateSelectedOrderedMeals', newValue);
    },
  },
  mounted() {
    this.items = this.value && this.value.map(item => item.name);

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = `0${dd}`;
    if (mm < 10) mm = `0${mm}`;

    const t = `${dd}/${mm}/${yyyy}`;
    const s = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    this.time = `${t} at ${s}`;

    this.orderNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 10;
  },
};
</script>
<style scoped>
.order-form{
  margin-top: 30px;
  line-height: normal;
  width: fit-content;
}
.order-label {
  margin-bottom: 20px;
}
.order-label span:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #171719;
}
.order-label span:nth-child(2) {
  margin-left: 59px;
}

.gray-label {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #737376;
}

.order-section-three{
  margin-top: 25px;
}

.client-message-section{
 margin-top: 4px;
}
.order-items-section{
 margin-top: 26px;
}

.text-field-message{
  background: #FFFFFF;
  border: 1.5px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 5px;
  height: 141px;
  width: 730px;
}

.message-section-title{
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   letter-spacing: 0.05em;
   color: #171719;
   margin-bottom: 13px;
}
.order-section-selected-meals .item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub-items-display {
  display: flex;
}
.sub-items-display #meal-counter{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #0B69FF;
  border-radius: 12px;
  width: 69px;
  height: 24px;
  margin-left: 46px;
}

.counter-font{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #AAAAAA;
}
#order-item-name{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #171719;

}
#order-item-price{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #171719;
  margin-top: 1px;
}
#counter-number-font{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #171719;
}
#text-field-name{
  margin-top: 32px;
}

#text-field-contact{
  margin-top: 32px;
}

#radio-title{
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #171719;
}

</style>
