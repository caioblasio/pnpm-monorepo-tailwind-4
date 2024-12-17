import { cx } from 'class-variance-authority'
import { mapPropsToClasses } from '../helpers/mapPropsToClasses'
import {
  type ResponsiveKeys,
  type ResponsiveProperty,
  type ExceptionMap,
} from '../types'
import { generateSafelist } from '../helpers/generateTailwindSafelist'

const flexItemTokens = {
  flexBasis: ['auto', 'hidden', 'visible', 'scroll'] as const,
  flexShrink: [0, 1] as const,
  flexGrow: [0, 1] as const,
}

const flexItemPrefixMap = {
  flexBasis: 'basis',
  flexShrink: 'shrink',
  flexGrow: 'grow',
} as const

const flexItemExceptionsMap: ExceptionMap = {
  [flexItemPrefixMap.flexGrow]: {
    1: 'grow', // Instead of grow-1, use grow
  },
  [flexItemPrefixMap.flexShrink]: {
    1: 'shrink', // Instead of shrink-1, use shrink
  },
}

export type FlexItemProps = {
  [K in ResponsiveKeys<typeof flexItemTokens>]?: ResponsiveProperty<
    typeof flexItemTokens,
    K
  >
}

export const getFlexItemsClasses = (props: FlexItemProps) => {
  const { flexBasis, flexShrink, flexGrow } = props

  return cx(
    mapPropsToClasses({
      value: flexBasis,
      prefix: flexItemPrefixMap.flexBasis,
    }),
    mapPropsToClasses({
      value: flexShrink,
      prefix: flexItemPrefixMap.flexShrink,
    }),
    mapPropsToClasses({ value: flexGrow, prefix: flexItemPrefixMap.flexGrow })
  )
}

export const generateFlexItemSafelist = () =>
  generateSafelist({
    props: flexItemTokens,
    prefixMap: flexItemPrefixMap,
    exceptionsMap: flexItemExceptionsMap,
  })
