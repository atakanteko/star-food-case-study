<template>
  <div style="width: fit-content">
    <Header title="Accepted"/>
    <section class="d-flex justify-space-between align-baseline" style="margin-top:39px">
      <div class="gray-info-btn" style="margin-right: 863px">
        <div class="gray-info-btn-icon">
          <img src="../../assets/images/Tgg.svg" alt="group-2.png" />
        </div>
        <div>
          <span class="gray-info-btn-title">Show 10 Elements</span>
        </div>
      </div>
      <NuxtLink to="/create_order" style="align-self: end">
        <div class="blue-add-btn">
          <div>
            <span class="blue-btn-title">Add New Order</span>
          </div>
        </div>
      </NuxtLink>
    </section>
    <div class="b-line mt-7"></div>
    <section class="order-list" v-if="this.listItems.length > 0">
      <div class="order-list-item d-flex flex-column"
          v-for="(item,index) in this.listItems"
          :key="index"
      >
        <div class="order-list-item-1 d-flex flex-row">
          <div class="d-flex flex-column" style="margin-right: 119px">
            <span class="order-list-item-title">Order number</span>
            <span class="order-list-item-info">#988123</span>
          </div>
          <div class="d-flex flex-column" style="margin-right: 107px">
            <span class="order-list-item-title">Date & Time</span>
            <span class="order-list-item-info">01/01/2020 at 2:14Pm</span>
          </div>
          <div class="d-flex flex-column" style="margin-right: 107px">
            <span class="order-list-item-title">Name</span>
            <span class="order-list-item-info">{{item.name}}</span>
          </div>
          <div class="d-flex flex-column" style="margin-right: 96px">
            <span class="order-list-item-title">Contact</span>
            <span class="order-list-item-info">{{item.contact}}</span>
          </div>
          <div class="d-flex flex-column" style="margin-right: 123px">
            <span class="order-list-item-title">Trans Type</span>
            <span class="order-list-item-info">{{item.radio}}</span>
          </div>
          <div class="d-flex flex-column">
            <span class="order-list-item-title">Trans Type</span>
            <span class="order-list-item-info">{{item.totalCost}}$</span>
          </div>
        </div>
        <div class="order-list-item-2 d-flex flex-row">
          <div class="order-list-item-s-title">Ordered Items</div>
          <div class="order-list-item-s-box"
               v-for="(i,index) in item.orderedItems"
               :key="index"
          >
            <span>{{i.name}} X {{i.quantity}}</span>
          </div>
        </div>
        <div class="order-list-item-3 d-flex flex-row justify-space-between">

          <div class="order-list-item-s-3-titles d-flex flex-column">
            <span>Additional information from customer</span>
            <span>{{item.clientMessage}}</span>
          </div>
          <div class="order-list-item-s-3-btns d-flex flex-row align-self-center align-center">
            <div style="margin-top: 6px">
              <img src="../../assets/images/printer.svg" alt="">
            </div>
            <div class="order-list-item-s-3-blue-btn">
              <span>Move to Cooking</span>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="no-list" v-else>
      <h1>Nothing to show</h1>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../Header';

export default {
  name: 'DashboardComponent',
  components: {
    Header,
  },
  data() {
    return {
      listItems: null,
    };
  },
  computed: {
    ...mapGetters('store', ['getListModel']),
  },
  watch: {
    '$store.state.listModel': {
      immediate: true,
      handler() {
        this.listItems = this.$store.getters['store/getListModel'];
      },
    },
  },
};
</script>
<style scoped>
.order-list-item-s-3-blue-btn span {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
}
.order-list-item-s-3-blue-btn{
  padding: 10px 20px;
  background: #286FFA;
  border: 1px solid #2159C8;
  box-sizing: border-box;
  border-radius: 3px;
  width: 179px;
  height: 42px;
  margin-left: 40px;
}
.order-list-item-s-3-titles span:last-child{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #171719;
  margin-top: 5px;
}
.order-list-item-s-3-titles span:first-child{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #737376;
}
.order-list-item-s-3-titles{
  width: 699px;
}
.order-list-item-3{
  margin-top: 37px;
}
.order-list-item-s-box span {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #171719;
}
.order-list-item-s-box{
  margin-right: 20px;
  padding: 10px 20px;
  background: #EBEBEB;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 4px;
  width: fit-content;
  height: 39px;
}
.order-list-item-2{
  margin-top: 54px;
}
.order-list-item-s-title{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #737376;
  width: 90px;
}
.order-list-item-info{
  margin-top:3px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #171719;
}
.order-list-item-title{
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #737376;
}
.order-list-item{
  width: 1447px;
  height: 278px;
  background: #FFFFFF;
  border: 1.5px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 27px 26px 26px 43px;
}
.order-list{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.b-line{
  border: 1.5px solid #E5E5E5;
  background-color: #E5E5E5;;
  width: 1447px
}

.blue-add-btn{
  padding: 11px 19px;
  background: #2A71FA;
  border: 1px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 3px;
  width: 169px;
  height: 42px;
}

.blue-btn-title{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
}
.gray-info-btn {
  display: flex;
  padding: 15px 20px;
  background: #EBEBEB;
  border: 1px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 5px 0px 0px 5px;
  width: fit-content;
  height: 50px;
}
.gray-info-btn-icon {
  margin-right: 15px;
}

.gray-info-btn-title {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #171719;
}
</style>
