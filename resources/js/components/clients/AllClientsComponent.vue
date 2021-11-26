<template>
  <div>
    <div class="div.between:flex bottom:margin-3">
      <div class="center:flex-items">
        <span class="right:margin-1">Show</span>
        <select
          class="select"
          v-model="currentEntries"
          @change="paginateEntries"
        >
          <option v-for="se in showEntries" :key="se" value=""></option>
        </select>
        <span class="left:margin-1">Entries</span>
      </div>
      <div class="end:flex"></div>
    </div>
    <DataTable :columns="columns" :entries="filteredEntries" />
    <div class="between:flex y:margin-3">
      <div>
        SHow {{ showInfo.from }} to {{ showInfo.to }} of
        {{ showInfo.of }} entries
      </div>
      <div class="end:flex"></div>
    </div>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";
import { $array } from "alga-js";
export default {
  name: "AllClients",
  components: {
    DataTable,
  },

  computed: {
    showInfo() {
      return $array.show(this.entries)(1, this.currentEntries);
    },
  },

  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "firstname", text: "First Name" },
        { name: "othernames", text: "Other names" },
        { name: "clientnumber", text: "Client Number" },
        { name: "cuts", text: "Number of Cuts" },
        { name: "status", text: "Cut Status" },
      ],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 72, 100],
      currentEntries: 10,
      filteredEntries: [],
    };
  },

  methods: {
    async getAllClient() {},

    paginateEntries() {
      this.filteredEntries = $array.paginate(this.entries)(
        1,
        this.currentEntries
      );
    },
  },
};
</script>

<style>
</style>