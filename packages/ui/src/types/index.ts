type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ResponsiveValue<T> = T | Partial<Record<Breakpoints, T>>

export type ResponsiveKeys<T> = keyof T
export type ResponsiveProperty<
  T,
  K extends ResponsiveKeys<T>,
> = T[K] extends readonly unknown[] ? ResponsiveValue<T[K][number]> : never

export type ExceptionMap = Record<string, Record<string | number, string>>
