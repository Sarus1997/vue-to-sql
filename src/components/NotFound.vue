<template>
  <v-container class="not-found" fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center">
        <h1 class="neon-text">404</h1>
        <h1>Page Not Found</h1>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="back-to-home" @click="$router.push('/')">
          กลับหน้าแรก
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.not-found {
  margin-top: 20px;
}

.neon-text {
  font-size: 15em;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-shadow:
    0 0 5px #0404f9,
    0 0 7px #101058,
    0 0 10px #9e9eff,
    0 0 20px #9e9eff,
    0 0 30px #9e9eff,
    0 0 40px #9e9eff;
  animation: neon-flicker 1.5s infinite alternate;
}

.back-to-home {
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

@keyframes neon-flicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }

  20%,
  24%,
  55% {
    opacity: 0.4;
  }
}

.back-to-home:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
