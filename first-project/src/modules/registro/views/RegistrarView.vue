<template>

<h2>Formulario de registro</h2>

<Form :validation-schema="schema" @submit="Onsubmit">
  <div class="form" >
    <label for="nombre">Nombre:</label>
    <Field  v-model="nombre" name="nombre" type="text"  id="nombre" placeholder="Ingrese su nombre"/>
    <ErrorMessage name="nombre" ></ErrorMessage>
  </div>

<div class="form">
  <label for="email">Email:</label>
  <Field v-model="email" name="email" type="email" id="email" placeholder="Ingrese su email"/>
  <ErrorMessage name="email" ></ErrorMessage>

</div>
<div class="form">
  <button type="submit">Registrar</button>
</div>
</Form>
</template>


<script setup >

import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from './schemas/validationSchema';
import { useRegistroStore } from './store/registroStore';
import { ref } from 'vue';

const registrarStore = useRegistroStore();

const nombre = ref('');
const email = ref('');


const Onsubmit = ()=>{
 registrarStore.guardarRegistro(nombre.value, email.value)
  console.log('se ha enviado el formulario')
}

</script>
<style scoped>

.form {
  margin-bottom: 10px;
}

</style>
