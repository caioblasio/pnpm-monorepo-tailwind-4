import { cx } from 'class-variance-authority'
import { mapPropsToClasses } from '../helpers/mapPropsToClasses'
import { type ResponsiveKeys, type ResponsiveProperty } from '../types'
import { generateSafelist } from '../helpers/generateTailwindSafelist'

// The allowed values need to be tailwind suffixes
// @TODO: What to do with hardcoded values? - Allow it by passing a className
const dimensionTokens = {
  width: ['full', '1/2', '1/3', 'screen', 'dvh'] as const,
  maxWidth: ['full', 'screen'] as const,
  minWidth: ['full', 'screen'] as const,
  height: ['full', 'screen', 'dvh'] as const,
  maxHeight: ['full', 'screen', 'dvh'] as const,
  minHeight: ['full', 'screen', 'dvh'] as const,
}

const dimensionPrefixMap = {
  width: 'w',
  maxWidth: 'max-w',
  minWidth: 'min-w',
  height: 'h',
  maxHeight: 'max-h',
  minHeight: 'min-h',
} as const

export type DimensionProps = {
  [K in ResponsiveKeys<typeof dimensionTokens>]?: ResponsiveProperty<
    typeof dimensionTokens,
    K
  >
}

export const getDimensionClasses = (spacingValues: DimensionProps) => {
  const { width, minWidth, maxWidth, height, minHeight, maxHeight } =
    spacingValues

  return cx(
    mapPropsToClasses({ value: width, prefix: dimensionPrefixMap.width }),
    mapPropsToClasses({ value: minWidth, prefix: dimensionPrefixMap.minWidth }),
    mapPropsToClasses({ value: maxWidth, prefix: dimensionPrefixMap.maxWidth }),
    mapPropsToClasses({ value: height, prefix: dimensionPrefixMap.height }),
    mapPropsToClasses({
      value: minHeight,
      prefix: dimensionPrefixMap.minHeight,
    }),
    mapPropsToClasses({
      value: maxHeight,
      prefix: dimensionPrefixMap.maxHeight,
    })
  )
}

export const generateDimensionSafelist = () =>
  generateSafelist({ props: dimensionTokens, prefixMap: dimensionPrefixMap })
