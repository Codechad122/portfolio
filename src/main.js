import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import ProjectOne from './components/ProjectOne.vue'
import ProjectTwo from './components/ProjectTwo.vue'
import ProjectThree from './components/ProjectThree.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project-one', component: ProjectOne },
  { path: '/project-two', component: ProjectTwo },
  { path: '/project-three', component: ProjectThree },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
