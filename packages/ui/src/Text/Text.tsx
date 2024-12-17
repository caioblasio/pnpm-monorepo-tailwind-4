import {
  forwardRef,
  type AriaAttributes,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textStyles = cva("font-standard", {
  variants: {
    variant: {
      standard: "text-base",
      small: "text-sm",
    },
    color: {
      black: "text-[#1B1B1B]",
      gray: "text-[#6D6D6D]",
      white: "text-[#FFFFFF]",
      teal: "text-[#36A18B]",
      current: "text-current",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    color: "black",
    align: "left",
  },
});

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textStyles> & {
    /** @default 'span' */
    as?: ElementType;
    children: ReactNode;
    "data-testid"?: string;
    "aria-hidden"?: AriaAttributes["aria-hidden"];
  };

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      children,
      as: Component = "span",
      id,
      color = "black",
      variant = "standard",
      align,
      "data-testid": dataTestId,
      "aria-hidden": ariaHidden,
      className,
    },
    forwardedRef
  ) => {
    return (
      <Component
        id={id}
        ref={forwardedRef}
        data-testid={dataTestId}
        aria-hidden={ariaHidden}
        className={textStyles({ variant, align, color, className })}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";
