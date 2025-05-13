import * as SQLite from 'expo-sqlite'

export const useDB = () => {
  const openDatabase = async () => {
    const db = await SQLite.openDatabaseAsync('sessions.db')
    return db
  }

  const initDB = async () => {
    const db = await openDatabase()
    const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)`
    const result = db.execAsync(sql)
    return result
  }

  const insertSession = async ({ localId, email, token }) => {
    const db = await openDatabase()
    const sql = `INSERT OR REPLACE INTO sessions (localId, email, token) VALUES (?, ?, ?)`
    const args = [localId, email, token]
    const result = await db.runAsync(sql, args)
    return result
  }

  const getSession = async () => {
    const db = await openDatabase()
    const sql = `SELECT * FROM sessions`
    const result = await db.getFirstAsync(sql)
    return result
  }

  const deleteSession = async () => {
    const db = await openDatabase()
    const sql = `DELETE FROM sessions`
    const result = await db.execAsync(sql)
    return result
  }

  return {
    initDB,
    insertSession,
    getSession,
    deleteSession,
  }
}
