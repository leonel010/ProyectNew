<template>
  <div  class="sidebar" >
    <h2>Bienvenido</h2>
    <h3>Nombre : {{ nombre }}</h3>
    <h3>email :  {{ email }}</h3>
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
import { ref , watch} from 'vue';

  const registroStore = useRegistroStore();

  const nombre = ref(registroStore.nombre)
  const email = ref(registroStore.email)

  watch(()=>registroStore.nombre, (newValue)=>{
    nombre.value = newValue})

  watch(()=>registroStore.email, (newValue)=>{
    email.value =newValue;
  } )

</script>

<style >

.siderbar {

  width: 200px;
  padding: 20px;

}
</style>
