export function MapToRecord (map: Map<any, any>): Record<any, any> {
  return Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {})
}