<template>
  <v-row justify="center">
    <v-dialog
      v-model="decline"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5">
          Warning
        </v-card-title>
        <v-card-text>
          Make sure the name and contact fields are filled!
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'DialogComponent',
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      decline: null,
    };
  },
  computed: {
    dialogStatus() {
      return this.dialog;
    },
  },
  watch: {
    dialog(newValue) {
      this.decline = newValue;
    },
  },
  methods: {
    closeDialog() {
      this.decline = false;
      this.$emit('changeDialog', false);
    },
  },
};
</script>
