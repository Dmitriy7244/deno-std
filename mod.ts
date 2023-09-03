import env from "./env.ts"

type AnyFunction = (...args: any[]) => any
type ResponseData = { ok: boolean; error?: string; result?: object }
type Class<T = any> = new (...args: any) => T

function log(header: string, data?: object) {
  console.log(`${header}:`, data)
}

function exclude<T>(array: T[], value: T) {
  return array.filter((item) => item !== value)
}

function error(header: string, data?: object): never {
  console.error(`${header}:`, data)
  throw new Error(header)
}

function filterFalsy<T>(array: (T | undefined | null)[]): T[] {
  return array.filter((i) => i != null) as T[]
}

export { env, error, exclude, filterFalsy, log }
export type { AnyFunction, Class, ResponseData }
