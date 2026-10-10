import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'about', 
    component: () => import('../views/AboutView.vue'),
    meta: { judul: 'Apa itu INSA Care?', breadcrumb: [{ label: 'Home', to: '/' }, { label: 'About INSA' }] } 
  },
  { path: '/service/care-at-home', name: 'care-at-home', 
    component: () => import('../views/CareAtHomeView.vue'), 
    meta: { judul: 'Care At Home', breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Care At Home' }] } 
  },
  { path: '/service/group-care', name: 'group-care', 
    component: () => import('../views/GroupCareView.vue'), 
    meta: { judul: 'Group Care', breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Group Care' }] } 
  },
  {
    path: '/service/event-medical-support', name: 'event-medical-support', 
    component: () => import('../views/EventMedicalView.vue'),
    meta: { judul: 'Event Medical View', breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Event Medical View' }] }
  },
  {
    path: '/frequently-asked-questions', name: 'faq', 
    component: () => import('../views/FaqView.vue'),
    meta: { judul: 'FAQ', breadcrumb: [{ label: 'Home', to: '/' }, { label: 'FAQ' }] }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})