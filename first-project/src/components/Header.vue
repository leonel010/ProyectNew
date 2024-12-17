<template>
  <div class="header">
    <h3>La temperatura actual es: <Weather></Weather> </h3>
  </div>
</template>
<script setup>

import Weather from '@/components/Weather.vue';

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  color: white;

}

h3 {

  margin: 0;
}
</style>
