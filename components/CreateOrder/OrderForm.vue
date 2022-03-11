<template>
  <div class="order-form">
    <section class="order-section-one">
      <div class="order-label">
        <span>Order Number:</span>
        <span class="gray-label">#988123</span>
      </div>
      <div class="order-label">
        <span style="margin-right: 17px;">Date & Time:</span>
        <span class="gray-label">01/01/2020 at 3:27Pm</span>
      </div>
    </section>
    <section class="order-section-two">
      <TextField text-area-label="Name" id="text-field-position"/>
      <TextField text-area-label="Contact" id="text-field-position"/>
    </section>

  </div>
</template>

<script>
import TextField from '../TextField';

export default {
  name: 'OrderFormComponent',
  components: { TextField },
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

#text-field-position{
  margin-top: 32px;
}

</style>
