import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
   },
     {
    path: '/lista-de-tareas',
    name: 'lista-de-tareas',
    component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
 },
 {
  path: '/registrar',
  name: 'registrar',
  component: () => import('../modules/registro/views/RegistrarView.vue'),
},
  ],
})

export default router