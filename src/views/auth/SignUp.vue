<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSignup = async () => {
  errorMessage.value = ''
  try {
    await auth.signUp(email.value, password.value, name.value)
    router.push('/')
  } catch (error) {
    let errorString = error.message || 'An error occurred. Please try again.'
    let newErrorString = errorString.replace('project', 'app')
    errorMessage.value = newErrorString
  }
}
</script>

<template>
  <v-container>
    <v-card class="pa-4 mx-auto" max-width="500">
      <v-card-title class="text-primary">Sign Up</v-card-title>
      <v-card-text>
        <v-alert v-if="errorMessage" type="error" dismissible>{{ errorMessage }}</v-alert>

        <v-text-field v-model="name" label="Full Name"></v-text-field>
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="handleSignup">Sign Up</v-btn>
        <v-btn variant="text" to="/login">Already have an account? Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
