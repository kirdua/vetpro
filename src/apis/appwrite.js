import { Client, Databases, Storage, Account } from 'appwrite'
const projectURL = import.meta.env.VITE_APPWRITE_ENDPOINT
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

const client = new Client().setEndpoint(`${projectURL}`).setProject(`${projectId}`)

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)

export { client, account, databases, storage }
