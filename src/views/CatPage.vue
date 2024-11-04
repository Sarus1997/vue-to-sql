<template>
  <Hero />
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6" xl="4" class="text-center">
        <v-card elevation="8" class="pa-6 mt-5">
          <v-card-title class="text-h3 mb-4">
            ค้นหาแมว
          </v-card-title>
          <v-card-text>
            <p class="body-1">ค้นหาด้วยตัวเลข เช่น 100 - 599</p>
            <v-text-field v-model="statusCode" label="Enter Status Code" type="number"
              @keyup.enter="fetchStatusImage" />
            <v-btn color="primary" @click="fetchStatusImage" class="mt-2">
              Fetch Image
            </v-btn>
            <div v-if="imageUrl" class="mt-4">
              <img :src="imageUrl" alt="HTTP Status Image" class="img-responsive" />
            </div>
          </v-card-text>
          <v-card-actions justify="center">
            <v-btn color="primary" to="/" elevation="2">
              ย้อนกลับ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const statusCode = ref('');
const imageUrl = ref(null);

function fetchStatusImage() {
  if (statusCode.value) {
    imageUrl.value = `https://http.cat/${statusCode.value}`;
  }
}
</script>

<style scoped>
.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
