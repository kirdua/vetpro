<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  try {
    await auth.login(email.value, password.value)
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message || 'Invalid login credentials. Please try again.' // Display Appwrite error
  }
}
</script>

<template>
  <v-container>
    <v-card class="pa-4 mx-auto" max-width="500">
      <v-card-title class="text-primary">Login</v-card-title>
      <v-card-text>
        <v-alert v-if="errorMessage" type="error" dismissible>{{ errorMessage }}</v-alert>

        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="handleLogin">Login</v-btn>
        <v-btn variant="text" to="/signup">Don't have an account? Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
