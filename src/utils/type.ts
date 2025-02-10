/* 提取 交集类型 的属性*/
export function extract<T extends Record<string, any>, U extends Record<string, any>>(
  obj: T
): Pick<T, Extract<keyof T, keyof U>> {
  const result = {} as Pick<T, Extract<keyof T, keyof U>>
  if (obj === undefined || obj === null) {
    return result
  }
  const keys = Object.keys(obj) as (keyof T)[]
  keys.forEach(key => {
    if (key in obj && ((key in {}) as unknown as U)) {
      ;(result as Record<typeof key, unknown>)[key] = obj[key]
    }
  })
  return result
}

/* 提取 补集类型 的属性 */
export function extractNonMatchingProperties<T extends Record<string, any>, U extends Record<string, any>>(
  obj: T
): Pick<T, Exclude<keyof T, keyof U>> {
  const result = {} as Pick<T, Exclude<keyof T, keyof U>>
  if (obj === undefined || obj === null) {
    return result
  }
  const keys = Object.keys(obj) as (keyof T)[]
  const nonMatchingKeys = keys.filter(key => !((key in {}) as unknown as U)) as Array<Exclude<keyof T, keyof U>>
  nonMatchingKeys.forEach(key => {
    result[key] = obj[key]
  })
  return result
}
