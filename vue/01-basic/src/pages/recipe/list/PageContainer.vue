<template>
  <recipe-list-page
    v-bind="{ searchText, recipes: filteredRecipes, onSearch, text, appear }"
    @update-snackbar="updateSnackBar"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      searchText: "",
      text: "",
      appear: false,
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch((error) => {
        //console.log(error);
        this.text = error;
        this.appear = true;
      });
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },

    updateSnackBar(status: boolean) {
      //console.log("Status:", status);
      this.appear = status;
    },
  },
});
</script>
