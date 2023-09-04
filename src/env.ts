import { loadEnv } from "./deps.ts"

class Env {
  private data: Record<string, string>

  constructor(path = ".env") {
    this.data = loadEnv({
      envPath: path,
      examplePath: path.replace(".env", ".example.env"),
    })
  }

  get<T>(key: string, defaultValue?: T) {
    const value = this.data[key] ?? defaultValue
    if (!value) throw new EnvError(key, "not set")
    return value
  }
  getInt(key: string, defaultValue?: number) {
    const value = Number(this.get(key, defaultValue))
    if (!Number.isInteger(value)) throw new EnvError(key, "not int")
    return value
  }
}

class EnvError extends Error {
  constructor(key: string, cause: string) {
    super(`Env parse error (key: ${key}, cause: ${cause})`)
  }
}

const env = new Env()
export default env
export { Env }
