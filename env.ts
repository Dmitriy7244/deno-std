import "https://deno.land/std@0.182.0/dotenv/load.ts"

class Env {
  get<T>(key: string, defaultValue?: T) {
    const value = Deno.env.get(key) ?? defaultValue
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
