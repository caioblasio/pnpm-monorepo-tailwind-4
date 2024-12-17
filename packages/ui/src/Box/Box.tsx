import { Slot } from '@radix-ui/react-slot'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactNode } from 'react'
import { getPositionClasses, type PositionProps } from '../props/position.props'
import { type SpacingProps, getSpacingClasses } from '../props/spacing.props'
import {
  type DimensionProps,
  getDimensionClasses,
} from '../props/dimension.props'
import { getOverflowClasses, type OverflowProps } from '../props/overflow.props'
import {
  getFlexItemsClasses,
  type FlexItemProps,
} from '../props/flexItem.props'
import { getGridItemClasses, type GridItemProps } from '../props/gridItem.props'
import { getBoxClasses, type BoxProps as BoxPrimitiveProps } from './box.props'

type BoxProps = BoxPrimitiveProps &
  SpacingProps &
  DimensionProps &
  PositionProps &
  OverflowProps &
  FlexItemProps &
  GridItemProps & {
    as?: 'div' | 'span'
    asChild?: boolean
    className?: string
    children: ReactNode
  }

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Tag = 'div',
      asChild,
      className,
      display,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      position,
      inset,
      top,
      bottom,
      right,
      left,
      overflow,
      overflowX,
      overflowY,
      flexBasis,
      flexShrink,
      flexGrow,
      gridColumn,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowStart,
      gridRowEnd,
      ...props
    },
    ref
  ) => {
    const dynamicClasses = cx(
      getBoxClasses({ display }),
      getSpacingClasses({ p, px, py, pt, pr, pb, pl }),
      getDimensionClasses({
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
      }),
      getPositionClasses({ position, inset, top, bottom, right, left }),
      getOverflowClasses({ overflow, overflowX, overflowY }),
      getFlexItemsClasses({ flexBasis, flexShrink, flexGrow }),
      getGridItemClasses({
        gridColumn,
        gridColumnStart,
        gridColumnEnd,
        gridRow,
        gridRowStart,
        gridRowEnd,
      }),
      className
    )

    const Component = asChild ? Slot : Tag

    return <Component ref={ref} className={dynamicClasses} {...props} />
  }
)

Box.displayName = 'Box'
