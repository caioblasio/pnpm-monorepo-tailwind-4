import { cx } from 'class-variance-authority'
import { mapPropsToClasses } from '../helpers/mapPropsToClasses'
import {
  type ResponsiveKeys,
  type ResponsiveProperty,
  type ExceptionMap,
} from '../types'
import { generateSafelist } from '../helpers/generateTailwindSafelist'

const gridItemTokens = {
  gridColumn: [1, 2, 'auto', 'full'] as const,
  gridColumnStart: [1, 2, 'full'] as const,
  gridColumnEnd: [1, 2, 'full'] as const,
  gridRow: [1, 2, 'auto', 'full'] as const,
  gridRowStart: [1, 2, 'full'] as const,
  gridRowEnd: [1, 2, 'full'] as const,
}

const gridItemPrefixMap = {
  gridColumn: 'col-span',
  gridColumnStart: 'col-start',
  gridColumnEnd: 'col-end',
  gridRow: 'row-span',
  gridRowStart: 'row-start',
  gridRowEnd: 'row-end',
} as const

const gridItemExceptionsMap: ExceptionMap = {
  [gridItemPrefixMap.gridColumn]: {
    auto: 'col-auto',
  },
  [gridItemPrefixMap.gridRow]: {
    auto: 'row-auto',
  },
}

export type GridItemProps = {
  [K in ResponsiveKeys<typeof gridItemTokens>]?: ResponsiveProperty<
    typeof gridItemTokens,
    K
  >
}

export const getGridItemClasses = (props: GridItemProps) => {
  const {
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
  } = props

  return cx(
    mapPropsToClasses({
      value: gridColumn,
      prefix: gridItemPrefixMap.gridColumn,
    }),
    mapPropsToClasses({
      value: gridColumnStart,
      prefix: gridItemPrefixMap.gridColumnStart,
    }),
    mapPropsToClasses({
      value: gridColumnEnd,
      prefix: gridItemPrefixMap.gridColumnEnd,
    }),
    mapPropsToClasses({
      value: gridRow,
      prefix: gridItemPrefixMap.gridRow,
    }),
    mapPropsToClasses({
      value: gridRowStart,
      prefix: gridItemPrefixMap.gridRowStart,
    }),
    mapPropsToClasses({
      value: gridRowEnd,
      prefix: gridItemPrefixMap.gridRowEnd,
    })
  )
}

export const generateGridItemSafelist = () =>
  generateSafelist({
    props: gridItemTokens,
    prefixMap: gridItemPrefixMap,
    exceptionsMap: gridItemExceptionsMap,
  })
