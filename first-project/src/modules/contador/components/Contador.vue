<template>

  <h1>hola mundo</h1>
  <p>
  {{contador}}
  </p>
  <button @click="increment" >Incrementar</button>
  <button @click="decrement" >Decrementar</button>
</template>

<script setup>

import {ref} from 'vue';

const  contador= ref(0);

const increment = ()=>{

contador.value++

}
const decrement = ()=>{

contador.value--

}

</script>


<style scoped>

p {

  color: red;

}

</style>
