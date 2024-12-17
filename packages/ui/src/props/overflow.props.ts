import { cx } from 'class-variance-authority'
import { mapPropsToClasses } from '../helpers/mapPropsToClasses'
import { type ResponsiveKeys, type ResponsiveProperty } from '../types'
import { generateSafelist } from '../helpers/generateTailwindSafelist'

const tokens = ['auto', 'hidden', 'visible', 'scroll'] as const

const overflowTokens = {
  overflow: tokens,
  overflowX: tokens,
  overflowY: tokens,
}

const overflowPrefixMap = {
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
} as const

export type OverflowProps = {
  [K in ResponsiveKeys<typeof overflowTokens>]?: ResponsiveProperty<
    typeof overflowTokens,
    K
  >
}

export const getOverflowClasses = (props: OverflowProps) => {
  const { overflow, overflowX, overflowY } = props

  return cx(
    mapPropsToClasses({ value: overflow, prefix: overflowPrefixMap.overflow }),
    mapPropsToClasses({
      value: overflowX,
      prefix: overflowPrefixMap.overflowX,
    }),
    mapPropsToClasses({ value: overflowY, prefix: overflowPrefixMap.overflowY })
  )
}

export const generateOverflowSafelist = () =>
  generateSafelist({ props: overflowTokens, prefixMap: overflowPrefixMap })
