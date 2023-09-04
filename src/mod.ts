import env, { Env } from "./env.ts"

type AnyFunction = (...args: any[]) => any
type ResponseData = { ok: boolean; error?: string; result?: object }
type Class<T = any> = new (...args: any) => T

function log(msg: string, data?: object) {
  if (data) console.log(`${msg}:`, data)
  else console.log(msg)
}

function error(msg: string, data?: object): never {
  if (data) console.error(`${msg}:`, data)
  else console.error(msg)
  throw new Error(msg)
}

function exclude<T>(array: T[], values: T[]) {
  return array.filter((item) => !values.includes(item))
}

function filterFalsy<T>(array: (T | undefined | null)[]): T[] {
  return array.filter((i) => i != null) as T[]
}

export { Env, env, error, exclude, filterFalsy, log }
export type { AnyFunction, Class, ResponseData }
