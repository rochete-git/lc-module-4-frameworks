<template>
    <login-page v-bind="{ login, updateLogin, loginRequest, loginError, text, appear }" @update-snackbar="updateSnackBar" />
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { validation } from "./validations";
import SnackbarComponent from "../../common/components/SnackbarComponent.vue";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage, SnackbarComponent },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      text: "",
      appear: false,
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value
      };

      validation.validateField(field, value).then(result => {
        this.loginError = {
          ...this.loginError,
          [field]: result
        };
      });
    },
    loginRequest() {
      validation.validateForm(this.login).then(result => {
        if (result.succeeded) {

          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
            })
            .catch(error =>
            {
              //console.log(error);
              /*alert(
                `Este mensaje debes implementarlo con el componente Snackbar de Vuetify ;) => ${error}`
              );*/
              this.text = error;
              this.appear = true;
              }
            );
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    updateSnackBar(status: boolean) {
      //console.log("Status:", status);
      this.appear = status;
    }
  }
});
</script>
