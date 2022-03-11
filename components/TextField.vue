<template>
  <div>
    <span>{{ textAreaLabel }}</span>
    <v-row>
      <v-col cols="12" sm="12"
      >
        <v-text-field
          v-model="inputValue"
          class="text-field-input"
          solo
          flat
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    textAreaLabel: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: null,
    };
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
</style>
