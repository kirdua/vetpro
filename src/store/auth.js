import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { account } from '@/apis/appwrite'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  async function getUser() {
    try {
      user.value = await account.get()
    } catch {
      user.value = null
    }
  }

  async function signUp(email, password, name) {
    try {
      await account.create('unique()', email, password, name)
      return
      //return login(email, password)
    } catch (error) {
      console.error('signup error:', error)
      throw error
    }
  }

  async function login(email, password) {
    try {
      // First, check if the user already has a session
      user.value = await account.get() // Fetch the logged-in user
      if (user.value) {
        console.log('User already logged in, skipping session creation.')
        return
      }
    } catch {
      user.value = null // If there's no session, proceed with login
    }

    // If no session exists, create a new one
    try {
      await account.createEmailPasswordSession(email, password)
      user.value = await account.get()
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  async function logout() {
    try {
      if (!user.value) {
        console.warn('No active session. Skipping logout.')
        return
      }

      await account.deleteSession('current')
      user.value = null
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return {
    user,
    isAuthenticated,
    signUp,
    login,
    logout,
    getUser,
  }
})
