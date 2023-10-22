import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'
import AddOrEditView from '../views/AddOrEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchView
    },
    {
      path: '/edit/:ProductID',
      name: 'Edit',
      props: true,
      component: AddOrEditView // () => import('../views/AddOrEdit.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: AddOrEditView // () => import('../views/AddOrEdit.vue')
    }
  ]
})

export default router
