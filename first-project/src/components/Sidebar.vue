<template>
  <div  class="sidebar" >
    <h2>Bienvenido</h2>
    <h3>Nombre : {{ registroStore.nombre }}</h3>
    <h3>email :  {{ registroStore.email }}</h3>
    <ul>
      <li>
        <router-link to="/contador" >Contador</router-link>
    </li>
    <li>
      <router-link to="/lista-de-tareas" >Lista de Tareas</router-link>
</li>
<li>
      <router-link to="/registrar" >Registro</router-link>
</li>
  </ul>
</div>

</template>

<script setup >
  import { useRegistroStore } from '@/modules/registro/views/store/registroStore';

  const registroStore = useRegistroStore();



</script>

<style >

.siderbar {

  width: 200px;
  padding: 20px;

}
</style>
