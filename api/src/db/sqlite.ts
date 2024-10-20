import sqlite3 from 'sqlite3'

const SQLite = sqlite3.verbose()

export interface QueryProps {
  command: string
  params: Array<string>
  method: 'get' | 'all' | 'run'
}

// Executa comandos SQL no banco SQLite de forma assíncrona
function query<T>(
  command: string,
  params: Array<string>,
  method: 'get' | 'all' | 'run' = 'all'
): Promise<T> {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error: Error | null, result: T) => {
      if (error) reject(error)
      else resolve(result)
    })
  })
}

const db = new SQLite.Database(
  './src/db/database.db',
  SQLite.OPEN_READWRITE,
  error => {
    if (error)
      return console.log(`Erro ao conectar-se com o banco: ${error.message}`)
  }
)

export { db, query }
