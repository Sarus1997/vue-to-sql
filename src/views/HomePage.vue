<template>
  <v-container fluid class="fill-height" style="background-color: #f9f9f9;">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <v-card elevation="10" class="pa-8 mt-5 rounded-lg" style="border-radius: 16px;">
          <v-card-title class="text-h5 font-weight-bold" style="color: #4a4a4a;">
            Data from SQL
          </v-card-title>
          <v-card-text>
            <ul class="data-list">
              <li v-for="item in data" :key="item.id" class="text-h6">{{ item.name }}</li>
            </ul>
          </v-card-text>
        </v-card>
        <div class="home-btn">
          <v-btn color="primary" href="#/cat">
            หน้าถัดไป
          </v-btn>
          <v-btn color="secondary" href="#/cat">
            หน้าถัดไป
          </v-btn>
        </div>
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
    const response = await axios.get('http://localhost:3000/api/data');
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
.fill-height {
  max-width: 100%;
  margin: 0 auto;
  font-weight: normal;
}

.data-list {
  padding: 0;
  list-style-type: none;
}

.data-list li {
  margin: 0.5rem 0;
  color: #333;
  font-size: 18px;
  font-weight: 500;
}

.navigation-btn {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.navigation-btn:hover {
  background-color: #0056b3;
}

.home-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 768px) {
  .navigation-btn {
    font-size: 16px;
  }

  .data-list li {
    font-size: 16px;
  }
}
</style>
