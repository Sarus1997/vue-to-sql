<template>
  <div>
    <h1>Data from SQL</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:3000/api/data')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
