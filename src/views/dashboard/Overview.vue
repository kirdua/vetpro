<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
<template>
  <div>
    <h1 class="text-primary">Overview</h1>
    <v-btn @click="handleLogout">logout</v-btn>
  </div>
</template>

<style lang="scss" scoped></style>
