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
      <div>
        <span>Name</span>
        <v-row>
          <v-col cols="12" sm="12"
          >
            <v-text-field
              v-model="inputValueName"
              class="text-field-input"
              :rules="inputRules"
              solo
              flat
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="mt-8">
        <span>Contact</span>
        <v-row>
          <v-col cols="12" sm="12"
          >
            <v-text-field
              v-model="inputValueContact"
              class="text-field-input"
              :rules="contactRules"
              solo
              flat
              ref="input"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
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
            clearable
            style="width: 730px !important;"
          ></v-select>
        </div>
      </div>
    </section>
    <section class="order-section-selected-meals"
             v-if="this.$store.getters['store/getSelectedOrderedMeals'].length > 0">
      <div class="item-row"
           v-for="(item,index) in this.$store.getters['store/getSelectedOrderedMeals']"
           :key="index">
        <div><h3 id="order-item-name">{{item.name}}</h3></div>
        <div class="sub-items-display">
          <h3 class="order-item-price" v-if="item.cost === 0">{{item.price}}$</h3>
          <h3 class="order-item-price" v-else>{{item.cost}}$</h3>
          <div id="meal-counter">
            <span class="counter-font"
                  @click="decQuantity(item.id)"
                  @keydown="decQuantity(item.id)"
                  :class="{disableClick: item.quantity === 1}">-</span>
            <span id="counter-number-font">{{item.quantity}}</span>
            <span class="counter-font"
                  @click="incQuantity(item.id)"
                  @keydown="incQuantity(item.id)">+</span>
          </div>
          <div style="margin-left: 30px; margin-top:3px"><img src="../../assets/images/remove.svg" alt=""></div>
        </div>
      </div>
    </section>
  </div>
</template>s
<script>

export default {
  name: 'OrderFormComponent',
  props: {
    value: {
      type: Array,
    },
    signal: {
      type: Boolean,
      default: false,
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
      inputValueName: null,
      inputValueContact: null,
      inputRules: [
        v => !!v || 'required field',
      ],
      contactRules: [
        v => !!v || 'required field',
        v => /^(05|5)[0-9][0-9][1-9]([0-9]){6}$/.test(v) || 'Your phone number format should be 05554441122',
      ],
    };
  },
  methods: {
    decQuantity(id) {
      this.$store.dispatch('store/quantityProcess', { processType: false, id });
    },
    incQuantity(id) {
      this.$store.dispatch('store/quantityProcess', { processType: true, id });
    },
    digitsCount(n) {
      let count = 0;
      if (n >= 1) ++count;
      while (n / 10 >= 1) {
        n /= 10;
        ++count;
      }
      return count;
    },
  },
  watch: {
    inputValueContact(newValue) {
      const digitNum = this.digitsCount(newValue);
      if (digitNum === 10) {
        this.$store.dispatch('store/markClientMessageFieldAsDirty', true);
      } else {
        this.$store.dispatch('store/markClientMessageFieldAsDirty', false);
      }
      if (newValue.length > 0 && digitNum === 10) {
        this.$emit('sendNameInputValue', newValue);
        this.$store.dispatch('store/markClientMessageFieldAsDirty', true);
      } else {
        this.$store.dispatch('store/markClientMessageFieldAsDirty', false);
      }
    },
    inputValueName(newValue) {
      if (newValue.length > 0) {
        this.$emit('sendContactInputValue', newValue);
        this.$store.dispatch('store/markNameFieldAsDirty', true);
      } else {
        this.$store.dispatch('store/markNameFieldAsDirty', false);
      }
    },
    selectedMeals(newValue) {
      this.$store.dispatch('store/calculateSelectedOrderedMeals', newValue);
      if (newValue.length > 0) {
        this.$store.dispatch('store/markSelectedMealsAsDirty', true);
      } else {
        this.$store.dispatch('store/markSelectedMealsAsDirty', false);
      }
    },
    signal() {
      if (this.signal) {
        this.selectedMeals = [];
      }
    },
    radios(radio) {
      this.$emit('sendRadioValue', radio);
    },
    clientMessage(value) {
      if (value.length > 0) {
        this.$emit('sendClientMessage', value);
      }
    },
    orderNumber(value) {
      this.$emit('sendOrder', value);
    },
    time(value) {
      this.$emit('sendTime', value);
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

span {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #171719;
}
.text-field-input{
  background: #FFFFFF;
  border: 1.5px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 5px;
  height: 51px;
  width: 730px;
  margin-top: 13px;
}

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

.order-section-selected-meals:last-child{
  margin-bottom: 20px;
}

.order-section-selected-meals .item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
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
  cursor: pointer;
}

.disableClick{
  pointer-events: none;
}
#order-item-name{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #171719;

}
.order-item-price{
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
