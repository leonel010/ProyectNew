<template>


  <div class="container" >
    <div>
      <Header></Header>
    </div>
    <Sidebar></Sidebar>

    <div class="content" >
      <RouterView></RouterView>
      </div>
  </div>
</template>


<script setup >

import Sidebar from '../components/Sidebar.vue'
import Header from '@/components/Header.vue'

</script>

<style>

.container {
padding: 20px;
  display: flex;



}

.content {
  flex:1;
  padding: 20px;

}

</style>
