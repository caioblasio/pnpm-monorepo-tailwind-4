import { cx } from 'class-variance-authority'
import { mapPropsToClasses } from '../helpers/mapPropsToClasses'
import { type ResponsiveKeys, type ResponsiveProperty } from '../types'
import { generateSafelist } from '../helpers/generateTailwindSafelist'

// The allowed values need to be tailwind suffixes
// @TODO: What to do with hardcoded values? - Allow it by passing a className
const positionTokens = {
  position: ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const,
  inset: [0] as const,
  top: [0] as const,
  right: [0] as const,
  bottom: [0] as const,
  left: [0] as const,
}

const positionPrefixMap = {
  position: '',
  inset: 'inset',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
} as const

export type PositionProps = {
  [K in ResponsiveKeys<typeof positionTokens>]?: ResponsiveProperty<
    typeof positionTokens,
    K
  >
}

export const getPositionClasses = (props: PositionProps) => {
  const { position, inset, top, bottom, right, left } = props

  return cx(
    mapPropsToClasses({ value: position, prefix: positionPrefixMap.position }),
    mapPropsToClasses({ value: inset, prefix: positionPrefixMap.inset }),
    mapPropsToClasses({ value: top, prefix: positionPrefixMap.top }),
    mapPropsToClasses({ value: bottom, prefix: positionPrefixMap.bottom }),
    mapPropsToClasses({ value: right, prefix: positionPrefixMap.right }),
    mapPropsToClasses({ value: left, prefix: positionPrefixMap.left })
  )
}

export const generatePositionSafelist = () =>
  generateSafelist({ props: positionTokens, prefixMap: positionPrefixMap })
