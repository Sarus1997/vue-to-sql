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
            <v-text-field v-model="statusCode" label="Enter Status Code" type="number" :disabled="isLoading"
              @keyup.enter="onButtonClick" />
            <v-btn :class="{ 'scale-animation': isButtonClicked }" color="primary" @click="onButtonClick" class="mt-2"
              :disabled="isLoading">
              <template v-if="isLoading">
                <v-progress-circular indeterminate size="20" color="white" />
              </template>
              <template v-else>
                Fetch Image
              </template>
            </v-btn>
            <div v-if="imageUrl && !isLoading" class="mt-4">
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
const isLoading = ref(false);
const isButtonClicked = ref(false);

async function fetchStatusImage() {
  isLoading.value = true;
  imageUrl.value = null;
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (statusCode.value) {
    imageUrl.value = `https://http.cat/${statusCode.value}`;
  }
  isLoading.value = false;
}

function onButtonClick() {
  isButtonClicked.value = true;
  fetchStatusImage();
  setTimeout(() => {
    isButtonClicked.value = false;
  }, 300);
}
</script>

<style scoped>
.img-responsive {
  max-width: 100%;
  height: auto;
}

.scale-animation {
  animation: scale-up 0.3s ease;
}

@keyframes scale-up {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
