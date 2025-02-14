const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('@/views/dashboard/Overview.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/auth/Signup.vue'),
  },
]
export default routes
