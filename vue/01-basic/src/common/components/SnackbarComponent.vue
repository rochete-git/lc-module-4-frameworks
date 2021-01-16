<template>
    <v-snackbar
      top
      color="red"
      :value="appear"
      @input="updateSnackbar"
      :timeout="timeout"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="updateSnackbar(false)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "SnackbarComponent",
  props: {
    text: String,
    appear: Boolean,
    timeout: Number,
  },

  methods: {
    updateSnackbar(appear: boolean) {
      this.$emit("update-snackbar-pre", appear);
    },
  },
});
</script>
