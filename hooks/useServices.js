import { Platform } from 'react-native'

let SQLite

if (Platform.OS !== 'web') {
  SQLite = require('expo-sqlite')
}

class WebServices {
  constructor() {
    this.STORAGE_KEY = 'user_session'
  }

  initDB = async () => {
    return true
  }

  insertSession = async ({ localId, user, token }) => {
    try {
      if (typeof window !== 'undefined') {
        const session = JSON.stringify({ localId, user, token })
        localStorage.setItem(this.STORAGE_KEY, session)
      }
    } catch (error) {
      console.error('Error inserting session:', error)
    }
  }

  getSession = async () => {
    try {
      const session = localStorage.getItem(this.STORAGE_KEY)
      return JSON.parse(session)
    } catch (error) {
      console.error('Error getting session:', error)
    }
  }

  deleteSession = async () => {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Error deleting session:', error)
    }
  }
}

class MobileServices {
  constructor() {
    this.db = null
  }
  async openDatabase() {
    if (!this.db) {
      this.db = SQLite.openDatabaseAsync('sessions.db')
    }
    return this.db
  }

  initDB = async () => {
    const db = await this.openDatabase()
    const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)`
    const result = db.execAsync(sql)
    return result
  }

  insertSession = async ({ localId, email, token }) => {
    const db = await this.openDatabase()
    const sql = `INSERT OR REPLACE INTO sessions (localId, email, token) VALUES (?, ?, ?)`
    const args = [localId, email, token]
    const result = await db.runAsync(sql, args)
    return result
  }

  getSession = async () => {
    const db = await this.openDatabase()
    const sql = `SELECT * FROM sessions`
    const result = await db.getFirstAsync(sql)
    return result
  }

  deleteSession = async () => {
    const db = await this.openDatabase()
    const sql = `DELETE FROM sessions`
    const result = await db.execAsync(sql)
    return result
  }
}

export const useServices = () => {
  const isWeb = Platform.OS === 'web'
  const services = isWeb ? new WebServices() : new MobileServices()

  return {
    initDB: services.initDB,
    insertSession: services.insertSession,
    getSession: services.getSession,
    deleteSession: services.deleteSession,
  }
}
