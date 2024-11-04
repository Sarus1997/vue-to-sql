<template>
  <Hero />
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card elevation="8" class="pa-6 mt-5">
          <v-card-title class="text-h3 mb-4">
            Data from SQL
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="item in data" :key="item.id">{{ item.name }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from 'axios';

import { ref, onMounted } from 'vue';

const data = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/data');  // เรียก API
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
h1 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin: 5px 0;
}
</style>
