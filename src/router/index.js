import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config.js';

const routes = [
  // Public Routes
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestView.vue')
  },
  
  // Admin Routes
  {
    path: '/admin',
    name: 'AdminLogin',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresGuest: true, isAdmin: true }
  },
  {
    path: '/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true, isAdmin: true }
  },
  {
    path: '/dashboard/umkm',
    name: 'AdminPelakuUMKM',
    component: () => import('../views/PelakuUMKMView.vue'),
    meta: { requiresAuth: true, isAdmin: true }
  },
  {
    path: '/dashboard/produk',
    name: 'AdminProdukUnggulan',
    component: () => import('../views/ProdukUnggulanView.vue'),
    meta: { requiresAuth: true, isAdmin: true }
  },
  
  // Legacy redirects (for backward compatibility)
  {
    path: '/login',
    redirect: '/admin'
  },
  {
    path: '/admin/login',
    redirect: '/admin'
  },
  {
    path: '/admin/dashboard',
    redirect: '/dashboard'
  },
  {
    path: '/admin/umkm',
    redirect: '/dashboard/umkm'
  },
  {
    path: '/admin/produk',
    redirect: '/dashboard/produk'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: '/'
});

// Navigation guards
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  
  // Redirect to admin login if accessing admin routes without auth
  if (to.meta.requiresAuth && !user) {
    next('/admin');
  } else if (to.meta.requiresGuest && user) {
    // If logged in user tries to access login page, redirect to admin dashboard
    next('/dashboard');
  } else {
    next();
  }
});

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    if (router.currentRoute.value.path === '/login') {
      router.push('/dashboard');
    }
  } else {
    // User is signed out
    if (router.currentRoute.value.meta.requiresAuth) {
      router.push('/login');
    }
  }
});

export default router;