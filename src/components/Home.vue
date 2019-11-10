<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3></h3>

    <ul>
      <li v-for="item in items"  :key="item.id" :item="item">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </div>
  
</template>

<script>
import items from './data.json'

export default {
  name: "Home",
  props: {
    msg: String,
    item: Object
  },
  data: function(){
    return {
      items: []
    }
  },
  created: function () {
    this.fetchData()
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.items = items;
      // this.items = [
      //     {id: 1, link: 'https://www.burnfatnotsugar.com/', text: 'BURN FAT NOT SUGAR' },
      //     {id: 2, link: 'https://thepediet.com/', text: 'The P:E Diet' }
      //   ]
      // var xhr = new XMLHttpRequest()
      // var self = this
      // xhr.open('GET', apiURL + self.currentBranch)
      // xhr.onload = function () {
      //   self.commits = JSON.parse(xhr.responseText)
      //   console.log(self.commits[0].html_url)
      // }
      // xhr.send()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}
a:hover{ color: #2a7453;}
</style>
