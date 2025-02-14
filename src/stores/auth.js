import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { account } from '@/apis/appwrite'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  async function signUp(email, password) {
    try {
      await account.create('unique()', email, password)
      return login(email, password)
    } catch (error) {
      console.error('signup error:', error)
    }
  }

  async function login(email, password) {
    try {
      await account.createEmailSession(email, password)
      user.value = await account.get()
    } catch (error) {
      console.error('login error:', error)
    }
  }

  async function logout() {
    await account.deleteSession('current')
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    signUp,
    login,
    logout,
  }
})
