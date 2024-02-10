import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompaniesList from '../views/Companies/Index.vue'
import CompaniesCreate from '../views/Companies/Create.vue'
import CompaniesEdit from '../views/Companies/Edit.vue'
import ClientsList from '../views/Clients/Index.vue'
import ClientsCreate from '../views/Clients/Create.vue'
import ClientsEdit from '../views/Clients/Edit.vue'

const routes = [
  {
    path: '/companies',
    name: 'CompaniesList',
    component: CompaniesList
  },
  {
    path: '/companies/create',
    name: 'CompaniesCreate',
    component: CompaniesCreate
  },
  {
    path: '/companies/:id/edit',
    name: 'CompaniesEdit',
    component: CompaniesEdit
  },
  {
    path: '/clientes',
    name: 'ClientsList',
    component: ClientsList
  },
  {
    path: '/clientes/create',
    name: 'ClientsCreate',
    component: ClientsCreate
  },
  {
    path: '/clientes/:id/edit',
    name: 'ClientsEdit',
    component: ClientsEdit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
