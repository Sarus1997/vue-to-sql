<template>
  <v-container fluid class="fill-height" style="background-color: #f5f5f5;">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="8" class="text-center">
        <v-card elevation="8" class="pa-8 mt-5 rounded-lg">
          <v-card-title class="text-h3 mb-4" style="font-weight: bold;">
            Data from SQL
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="item in data" :key="item.id" class="text-h6">{{ item.name }}</li>
            </ul>
            <br>
            <v-btn color="primary" class="back-to-home" href="#/story">หน้าถัดไป</v-btn>
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
.fill-height {
  max-width: auto;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.back-to-home {
  text-decoration: none;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .fill-height {
    padding: 1rem;
  }

  .back-to-home {
    font-size: 16px;
  }
}
</style>
