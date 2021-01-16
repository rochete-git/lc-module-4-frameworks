<template>
  <v-data-table :headers="headers" :items="recipes" item-key="name"
      class="table">
      <template v-slot:item.actions="{ item }">
          <v-btn text icon :to="{ path: baseRoute + '/' + item.id }">
            <v-icon>edit</v-icon>
          </v-btn>
      </template>
      </v-data-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
//import HeaderComponent from "./Header.vue";
//import RowComponent from "./Row.vue";
import { baseRoutes } from "../../../../router";

export default Vue.extend({
  name: "TableComponent",
  //components: { HeaderComponent, RowComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "",
          value: "actions",
          sortable: false
        },
      ],
      baseRoute: baseRoutes.recipe
    };
  },
});
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
