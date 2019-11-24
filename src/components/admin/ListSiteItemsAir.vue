<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="(col, colIndex) in columns" :key="colIndex">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" :key="record.id">
        <td v-for="(col, colIndex) in columns" :key="record.id + '-' + colIndex">
          {{ record.fields[col] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  name: "ListSiteItemsAir",
  props: [
    'columns',
    'filter',
    'sort',
  ],
  data () {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      apiKey: 'keynhXaxWOSmSo05h', // Always use a read-only account token
      base: 'appSn3xo7fG3NuokC/Links',
      records: []
    };
  },
  mounted: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      axios({
        url: this.apiUrl + this.base,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        },
        params: {
          filterByFormula: this.filter || '',
          sort: this.sort || ''
        }
      }).then((res) => {
        this.records = res.data.records;
      });
    }
  }
};
// https://developers.taxjar.com/blog/airtable-and-vue-js-for-static-websites/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

</style>
